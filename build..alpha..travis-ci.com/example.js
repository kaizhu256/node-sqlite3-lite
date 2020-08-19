/*
example.js

this script will run node-demo of sqlite3-lite

instruction
    1. save this script as example.js
    2. run shell-command:
        $ npm install sqlite3-lite &&             PORT=8081 node example.js

    3. edit this script to suit your needs
*/


/* istanbul instrument in package sqlite3 */
/* jslint utility2:true */
/* istanbul ignore next */
// run shared js-env code - init-local
(function () {
    "use strict";
    let db;
    let sqlite3;
    sqlite3 = (
        globalThis.utility2_rollup
        || globalThis.utility2_jslint
        || require("sqlite3-lite")
    );
    db = new sqlite3.Database(":memory:");
    db.serialize(function () {
        let ii;
        let stmt;
        db.run("CREATE TABLE lorem (info TEXT)");
        stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        ii = 0;
        while (ii < 10) {
            stmt.run("Ipsum " + ii);
            ii += 1;
        }
        stmt.finalize();
        db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
            if (err) {
                throw err;
            }
            globalThis.console.log(row.id + ": " + row.info);
        });
    });
    db.close();
}());
