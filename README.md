![Gambar Testing](https://github.com/RenYamaa/Proyek-input-kontak-ke-JSON-file/blob/main/RetroStyleWorld.png)
# 📔 Catatan Proyek: Kontak Sederhana (Simple Contact Database)

Ini adalah proyek command-line interface (CLI) dasar yang saya buat menggunakan Node.js. Tujuan utamanya adalah untuk melatih
kemampuan dasar manipulasi File System (fs) dan parsing JSON. Data kontak disimpan dalam file datakontak.json.

## 🚀 Cara Menjalankan
### 🛠️ Prasyarat

Memastikan **Node.js** sudah terinstal di sistem.

### 📂 Langkah-langkah
1. Buka **Terminal** dan masuk ke direktori proyek ini.
2. Install dependency yang diperlukan (readline-sync):
```bash
npm install readline-sync
```
3. Menjalankan program:
```bash
node scriptkontak.js
```

## ⚙️ Alur Program
Ketika program dijalankan (node scriptkontak.js):

1. **Input**: Program akan meminta input nama, nomor telepon, dan alamat melalui readline-sync.
2. **Baca Data Lama**: Membaca konten dari datakontak.json secara sinkron menggunakan fs.readFileSync.
3. **Parsing & Tambah**: Data JSON lama diubah menjadi array objek (JSON.parse). Objek data kontak yang baru kemudian dimasukkan (push) ke array tersebut.
4. **Tulis Ulang**: Array objek diubah kembali menjadi string JSON yang rapi (JSON.stringify(..., null, 2)) dan ditulis ulang ke datakontak.json menggunakan fs.writeFile.
5. **Output**: Konsol akan menampilkan konfirmasi bahwa file telah disimpan.

## 📄 Struktur File
|File|Description|
| ------------- | ------------- |
| **scriptkontak.js**  | Logika inti program. Di sini proses I/O (Input/Output), manipulasi data, dan operasi File System dilakukan.  |
| **datakontak.json**  | Database sederhana tempat semua data kontak disimpan.  |

## 💡 Pembelajaran Utama
Hal-hal yang aku pelajari dan kuaplikasikan di proyek ini:
- **File System (fs)**: Penggunaan readFileSync dan writeFile untuk interaksi file.
- **Synchronous I/O**: Meminta input user secara blocking (sinkron) menggunakan readline-sync.
- **JSON Handling**: Teknik dasar mengubah data dari JSON ke Objek/Array (parse) dan sebaliknya (stringify) untuk proses penyimpanan.
