const db = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "absensiswa",
        port: "3306",
    },
});

module.exports = db;
