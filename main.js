"use strict";

import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./test.db");

// db.run("drop table if exists members");
db.run("create table if not exists members(name,age)");
db.run("insert into members(name,age) values(?,?)", "hoge", 33);
db.run("insert into members(name,age) values(?,?)", "foo", 44);
db.each("select * from members", (err, row) => {
    console.log(`${row.name} ${row.age}`);
});

db.close();
