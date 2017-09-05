/**
 * Copyright (c) 2017 Jewel Mahanta
 * https://github.com/lap00zza/Paste/blob/master/LICENSE
 */

import * as Koa from "koa";
import * as Router from "koa-router";
import * as Static from "koa-static";
import * as Views from "koa-views";
import * as path from "path";

// Initialize the app and the router
const app = new Koa();
const router = new Router();
const PORT = 3000;

// Set the view engine and the static file server.
app.use(Views(path.join(__dirname, "../views"), {
    extension: "ejs",
}));

app.use(Static(path.join(__dirname, "./assets")));

/* --- Routes --- */
router.get("index", "/", async ctx => {
    await ctx.render("index.ejs");
});

// Register the routes
app.use(router.routes());
app.use(router.allowedMethods());

// Run paste
app.listen(PORT);
console.log(`Running Paste on port ${PORT}`);
