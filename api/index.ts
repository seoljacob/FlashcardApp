const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Winnipeg101106",
    database: "quiz"
})

const insert = "INSERT INTO Users (user_id, email, first_name) VALUES ('QdFwUbbDn9Xio3RZ8BGZmOP8mXr1', 'test@test.com', 'Jacob')";

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected!");
    db.query(insert, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    })
})

