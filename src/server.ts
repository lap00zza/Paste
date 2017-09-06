/**
 * Copyright (c) 2017 Jewel Mahanta
 * https://github.com/lap00zza/Paste/blob/master/LICENSE
 */

// import * as fs from "fs";
/* tslint:disable:no-var-requires*/
const Hashids = require("hashids");
/* tslint:enable:no-var-requires*/
import * as Koa from "koa";
import * as BodyParser from "koa-bodyparser";
import * as Router from "koa-router";
import * as Static from "koa-static";
import * as Views from "koa-views";
import * as path from "path";
import {Client} from "pg";

interface IPaste {
    title: string;
    content: string;
    type: number;
    timestamp: Date;
}

enum IPasteType {
    "None",
    "Javascript",
    "Golang",
    "Python",
}

/* --- Initialize the app, database, hashids and the router --- */
const app = new Koa();
const router = new Router();
const hashids = new Hashids(process.env.SALT || "");
const PORT = 3000;
const db = new Client({
    database: process.env.PGDATABASE || "",
    host: process.env.PGHOST || "",
    password: process.env.PGPASSWORD || "",
    port: Number(process.env.PGPORT) || 0,
    user: process.env.PGUSER || "",
});
db.connect();
/* --- ~~~ --- */

/* --- Initialize the middlewares --- */
app.use(BodyParser({
    enableTypes: ["json"],
}));

app.use(Views(path.join(__dirname, "../views"), {
    extension: "ejs",
}));

app.use(Static(path.join(__dirname, "./assets")));
/* --- ~~~ --- */

/* --- Routes --- */
router.get("index", "/", async ctx => {
    await ctx.render("index.ejs");
});

router.get("get_paste", "/:id", async ctx => {
    try {
        const query = "SELECT * FROM paste WHERE id = $1";
        const response = await db.query(query, [hashids.decode(ctx.params.id)[0]]);
        if (response.rows.length > 0) {
            // console.log(response);
            const Paste: IPaste = response.rows[0];
            await ctx.render("paste.ejs", {
                content: Paste.content,
                title: Paste.title,
            });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post("post_paste", "/", async ctx => {
    const body = ctx.request.body as IPaste;
    if (body && body.title && body.content) {
        try {
            // console.log(ctx.request.body);
            const query = "INSERT INTO paste(title, content, type, timestamp) VALUES($1, $2, $3, $4) RETURNING id;";
            const response = await db.query(query, [body.title, body.content, IPasteType.None, new Date()]);
            // console.log(response, router.url("get_post", response.rows[0].id));
            ctx.body = {
                paste_id: hashids.encode(response.rows[0].id),
            };
        } catch (err) {
            console.log(err);
        }
    } else {
        ctx.status = 400;
        ctx.body = "Body must be a JSON string with non-empty keys title and content.";
    }
});
/* --- ~~~ --- */

// Register the routes
app.use(router.routes());
app.use(router.allowedMethods());

// Run paste
app.listen(PORT);
console.log(`Running Paste on port ${PORT}`);
