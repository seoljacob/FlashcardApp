const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Winnipeg101106"
})

db.connect((err: any) => {
    if (err) throw err;
    console.log("Database connected!");
})