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


// membuat function tampil absen
const tampilAbsen = async () => {
    return await db
    .from("siswa")
    .select("*")
    .then((rows) => {
        return rows;
    })
    .catch((err) => console.log(err));
};

// function hapusAbsen
const hapusAbsen = async (data)  => {
    return await db("siswa")
    .where(data)
    .del()
    .then((rows) => {
        return rows;
    })
    .catch((err) => console.log(err))
};

// function edit absen
const editAbsen = async (id, data) => {
    return await db("siswa")
    .where({ id: id })
    .update(data)
    .then((rows) => {
        return rows;
    })
    .catch((err) => console.log(err))
}


// membuat fuction hapusAbsen
// membuat fuction editAbsen

module.exports = { tambahAbsen, tampilAbsen, hapusAbsen, editAbsen };