// import connection database
const db = require("./connection")

// membuat fugsi tambah absen
const tambahAbsen = async (data) => {
    return await db
    .table("siswa")
    .insert(data)
    .then((rows) =>{
        return rows;
    })
    .catch((err) => console.log(err));
};

module.exports = { tambahAbsen };