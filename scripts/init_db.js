const fs = require("fs");
const Client = require("pg").Client;

const db = new Client({
    database: process.env.PGDATABASE || "",
    host: process.env.PGHOST || "",
    password: process.env.PGPASSWORD || "",
    port: Number(process.env.PGPORT) || 0,
    user: process.env.PGUSER || "",
});

db.connect();

const initQuery = fs.readFileSync("paste_schema.sql").toString();

db.query(initQuery, (err, res) => {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log(res);
        process.exit(0);
    }
});
