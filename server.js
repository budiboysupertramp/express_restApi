// import package
const express = require("express");
const cors = require("cors");
const app = express();

// import dari controller
const absen = require("./controller/absenController");


// midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// roting
app.use("/api/absen", absen);

// listener
app.listen(3000, () => {
    console.log("server berjalan di server 3000")
});