const rs = require('readline-sync');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { json } = require('stream/consumers');

const PATH_FILE = 'datakontak.json';

function tambahKontak() {
    // Kita minta input dari user berupa nama, kontak, alamat
    console.log("-----Database kecil kecilan tentang Kontak------");
    const nama = rs.question('Masukkan nama anda: ');
    const telepon = rs.question('Masukkan Nomor Telepon anda: ');
    const alamat = rs.question('Masukkan alamat anda: ');

    //Baca file dulu dari json, walaupun isinya cuma []
    const Read_File = fs.readFileSync(PATH_FILE, 'utf-8', (err) => {
        if (err) {
            console.error("JSON Gagal dibaca!!! ", err);
            return;
        }
    });

    //Parse data JSON yang lama jadi array of object 
    const datalamajadiarray = JSON.parse(Read_File);

    //buat objek untuk data yang mau dimasukin ke JSON file
    const newData = {
        nama: nama,
        telepon: telepon,
        alamat: alamat
    }

    //Ini variabel buat nampilin di Console log doang, data seperti apa yang dah ditambahin ke json
    const tampilconsole = JSON.stringify(newData, null, 2);

    //push data  baru ke array yang tadi di parse dari json lama
    datalamajadiarray.push(newData);

    //finishing agar struktur json lebih rapih
    const finishing = JSON.stringify(datalamajadiarray, null, 2);

    //write file ke file json sebenarnya untuk disimpan. 
    //disarankan tetap dimasukkan ke variabel fungsinya walau variabelnya ga dipake.
    const writefile = fs.writeFile('datakontak.json', finishing, (err) => {
        if (err) {
            console.error("JSON Gagal ditulis!!! ", err);
            return;
        }
    });

    console.log("File berhasil disimpan! data yang disimpan: \n" + tampilconsole);
}

tambahKontak();