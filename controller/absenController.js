const express = require("express");
const absen = express.Router();
const {tambahAbsen} = require("../model/absenModel");

// tangkap data dari request body (adanya di test.res)
absen.post("/", (req, res) => {
    let data = req.body;

    // masukan fungsinya
    tambahAbsen(data)
    .then((result)=>{
        res.json({
            message: "data berhasil dimasukan",
            rows: result,
        })
    .catch((err)=> {
        res.status(400).json({
            pesan: "eror pada mysql syntax",
        });
    });
    });
});


module.exports = absen;