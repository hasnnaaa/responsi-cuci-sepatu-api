# REST API Daftar Barang Cuci Sepatu## Deskripsi Umum



Proyek ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript. API ini dibuat menggunakan Node.js dan Express.js, berfungsi untuk mengelola data sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu. Data untuk API ini disimpan secara persisten menggunakan database cloud **Supabase**.



Tujuan utama proyek ini adalah untuk mempermudah proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui REST API sederhana.## Tujuan* Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.* Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.* Mengelola data secara persisten menggunakan database cloud **Supabase (PostgreSQL)**.* Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata.## Fitur Utama API



| Metode | Endpoint | Deskripsi |

| :--- | :--- | :--- |

| `GET` | `/items` | Menampilkan seluruh daftar sepatu yang sedang dicuci. |

| `GET` | `/items/:id` | Menampilkan detail satu sepatu berdasarkan ID. |

| `POST` | `/items` | Menambahkan data sepatu baru ke dalam daftar. |

| `PUT` | `/items/:id` | Memperbarui status atau data sepatu (misal dari 'Sedang Dicuci' menjadi 'Selesai'). |

| `DELETE` | `/items/:id` | Menghapus data sepatu yang sudah selesai dicuci. |## Struktur Data



Contoh struktur data sepatu yang disimpan (sesuai dengan tabel Supabase Anda):```json

{

  "id": 2,

  "nama": "Nike Air Max",

  "status": "Selesai",

  "tanggalmasuk": "2025-10-08",

  "tanggalselesai": "2025-10-10"

}

Keterangan:

id → Nomor unik sepatu (Primary Key, auto-increment)

nama → Nama sepatu atau merek pelanggan (tipe text)

status → Status proses cuci (tipe text, misal: "Sedang Dicuci" / "Selesai")

tanggalmasuk → Tanggal sepatu diterima untuk dicuci (tipe date)

tanggalselesai → Tanggal sepatu selesai dicuci (tipe date, bisa null)

Bonus Fitur

API ini juga dilengkapi dengan fitur filter berdasarkan status, misalnya: GET /items?status=Selesai akan menampilkan hanya sepatu yang sudah selesai dicuci.

Alur Kerja API

Pengguna mengirimkan permintaan HTTP (GET, POST, PUT, DELETE) ke server.

Server memproses permintaan menggunakan Express.js.

Data sepatu disimpan atau diambil dari database Supabase.

Server mengembalikan respons dalam format JSON.

Teknologi yang Digunakan

Node.js: Runtime environment untuk menjalankan JavaScript di sisi server.

Express.js: Framework untuk membangun REST API.

Supabase: Platform Backend-as-a-Service (BaaS) yang digunakan sebagai database PostgreSQL.

Vercel: Platform cloud untuk mendeploy API agar dapat diakses secara publik.

Contoh Request dan Response

GET /items

Response (200 OK):

(Menampilkan data yang ada di database Anda)

JSON



[

  {

    "id": 2,

    "nama": "Nike Air Max",

    "status": "Selesai",

    "tanggalmasuk": "2025-10-08",

    "tanggalselesai": "2025-10-10"

  },

  {

    "id": 3,

    "nama": "Vans Old Skool",

    "status": "Sedang Dicuci",

    "tanggalmasuk": "2025-10-09",

    "tanggalselesai": null

  }

]

POST /items

Body Request:

JSON



{

  "nama": "Adidas Superstar",

  "status": "Sedang Dicuci",

  "tanggalmasuk": "2025-10-11"

}

Response (201 Created):

JSON



{

  "message": "Data sepatu berhasil ditambahkan."

}

PUT /items/3

(Mengubah status "Vans Old Skool" menjadi "Selesai")

Body Request:

JSON



{

  "status": "Selesai",

  "tanggalselesai": "2025-10-12"

}

Response (200 OK):

JSON



{

  "message": "Status sepatu berhasil diperbarui."

}

DELETE /items/2

Response (200 OK):

JSON



{

  "message": "Data sepatu berhasil dihapus."

}

Instalasi dan Menjalankan Lokal

Clone repository ini.

Masuk ke folder proyek: cd api-cuci-sepatu

Install dependensi: npm install

Buat file .env di folder utama dan isi dengan kredensial Supabase Anda:

Code snippet



SUPABASE_URL=...

SUPABASE_KEY=...

PORT=3000

Jalankan server dalam mode pengembangan: npm run dev

API akan berjalan di http://localhost:3000.

Link Deploy (Vercel)

API ini telah di-deploy dan dapat diakses publik melalui link berikut:

(Ganti dengan link Vercel Anda!)

(https://cuci-sepatu-155.vercel.app/)
