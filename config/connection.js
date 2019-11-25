const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "	v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "nttyvfe50rarhv4i",
        password: "	nw7c3aria7zmggqs",
        database: "xn5tj7fbmb02grig"
    })
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;