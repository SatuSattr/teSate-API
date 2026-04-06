# 🍢 Tesate API - Restoran Menu API

API sederhana berbasis Node.js dan Express untuk mengelola data menu restoran (Sate & Minuman Tradisional). API ini mendukung pencarian produk, kategori, informasi harga, rating, dan ketersediaan stok.

## 🚀 Fitur Utama

- **Endpoint Terpisah**: Akses khusus makanan, minuman, atau semua menu.
- **Fitur Pencarian**: Cari menu berdasarkan Nama, Deskripsi, atau Tags (misal: "Pedas", "Best Seller").
- **Metadata Produk**: Termasuk harga, rating, total terjual, dan status stok.
- **Vercel Ready**: Konfigurasi siap dideploy ke Vercel.

---

## 🛠️ Instalasi & Menjalankan Lokal

1. **Clone repositori atau buat folder baru.**
2. **Install Dependensi**:
   ```bash
   npm install
   ```
3. **Jalankan Server**:
   ```bash
   npm start
   ```
   Server akan berjalan di: `http://localhost:3000`

---

## 📖 Dokumentasi API

### 1. Root / Welcome

Menampilkan daftar endpoint yang tersedia.

- **URL**: `/`
- **Method**: `GET`

### 2. Dapatkan Semua Menu

Mengambil seluruh data makanan dan minuman.

- **URL**: `/api/menu`
- **Method**: `GET`

### 3. Dapatkan Daftar Makanan

- **URL**: `/api/menu/foods`
- **Method**: `GET`

### 4. Dapatkan Daftar Minuman

- **URL**: `/api/menu/beverages`
- **Method**: `GET`

### 5. Pencarian Menu (Search)

Mencari item berdasarkan kata kunci pada nama, deskripsi, atau tags.

- **URL**: `/api/menu/search?q={keyword}`
- **Method**: `GET`
- **Contoh**: `/api/menu/search?q=pedas`

---

## 📤 Contoh Response (JSON)

### Search Response (`GET /api/menu/search?q=sate`)

```json
{
  "success": true,
  "count": 6,
  "results": {
    "foods": [
      {
        "id": 1,
        "name": "Sate Madura",
        "price": 25000,
        "is_available": true,
        "rating": 4.8,
        "total_sold": 1250,
        "tags": ["Best Seller", "Kacang"],
        "description": "Sate ayam khas Madura yang disajikan dengan bumbu kacang kental...",
        "image": "...",
        "image_resized": "..."
      }
    ],
    "beverages": []
  }
}
```

---

## 🗂️ Struktur Data Produk

| Field          | Tipe    | Deskripsi                        |
| :------------- | :------ | :------------------------------- |
| `id`           | Number  | ID unik produk                   |
| `name`         | String  | Nama produk                      |
| `price`        | Number  | Harga dalam Rupiah               |
| `is_available` | Boolean | Status stok (true = tersedia)    |
| `rating`       | Number  | Rating rata-rata (1.0 - 5.0)     |
| `tags`         | Array   | Kategori tambahan (e.g. "Pedas") |

---

## 🌐 Deployment

Proyek ini menggunakan `module.exports = app` agar kompatibel dengan **Vercel**. Cukup hubungkan repo GitHub kamu ke Vercel dan gunakan `index.js` sebagai entry point.
