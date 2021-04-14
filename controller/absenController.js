const express = require("express");
const absen = express.Router();
const {
  tambahAbsen,
  tampilAbsen,
  hapusAbsen,
  editAbsen
} = require("../model/absenModel");

// tangkap data dari request body (adanya di test.res)
absen.post("/", (req, res) => {
  let data = req.body;

  // masukan fungsinya
  tambahAbsen(data)
    .then((result) => {
      res.json({
        message: "data berhasil dimasukan",
        rows: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        pesan: "eror pada mysql syntax",
      });
    });
});

// tangkap data dari request body(test,res)
absen.get("/", (req, res) => {
  // functiom tampil model
  tampilAbsen()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({
        pesan: "tidak bisa menampilkan data",
      });
    });
});

// tangkp data dari request body
absen.delete("/", (req, res) => {
  let data = req.body;

  // function hapusAbsen
  hapusAbsen(data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          pesan: "berhasil menghapus data",
        });
      } else {
        res.status(404).json({
          pesan: "data yang akan dihapus tidak ditemukan",
        });
      }
    })
    .catch((err) => {
      res.status(401).json({
        pesan: "gagal menghapus data",
      });
    });
});

// function editAbsen
absen.patch("/edit/:id", (req, res) => {
  let id = req.params.id; //capture params id
  let data = req.body; //capture body dta

  //   buat function editabsen
  editAbsen(id, data)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({
          hasil: result,
          pesan: "berhasil ubah data",
        });
      } else {
        res.status(404).json({
          hasil: result,
          pesan: "data yang akan diubah tidak ditemukan",
        });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = absen;
