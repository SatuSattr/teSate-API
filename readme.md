# 🍢 Tesate API - Restoran Menu API

API sederhana berbasis Node.js dan Express untuk mengelola data menu restoran (Sate & Minuman Tradisional). API ini mendukung pencarian produk, kategori, detail per item, serta informasi harga, rating, dan ketersediaan stok.

### 🔗 Public Endpoint

> te-sate-api.vercel.app

---

## 🚀 Fitur Utama

- **Endpoint Terpisah**: Akses khusus makanan, minuman, atau semua menu.
- **Fitur Pencarian**: Cari menu berdasarkan Nama, Deskripsi, atau Tags.
- **Detail Produk**: Ambil detail spesifik berdasarkan ID.
- **Metadata Lengkap**: Harga, rating, total terjual, dan status stok.
- **Vercel Ready**: Siap deploy ke Vercel.

---

## 🛠️ Instalasi & Menjalankan Lokal

1. **Clone repositori atau buat folder baru**
2. **Install Dependensi**

   ```bash
   npm install
   ```

3. **Jalankan Server**

   ```bash
   npm start
   ```

   Server berjalan di:

   ```
   http://localhost:3000
   ```

---

## 📖 Dokumentasi API

### 1. Root / Welcome

Menampilkan informasi API dan daftar endpoint.

- **URL**: `/`
- **Method**: `GET`

---

### 2. Dapatkan Semua Menu

Mengambil seluruh data makanan dan minuman.

- **URL**: `/api/menu`
- **Method**: `GET`

---

### 3. Dapatkan Daftar Makanan

- **URL**: `/api/menu/foods`
- **Method**: `GET`

---

### 4. Dapatkan Daftar Minuman

- **URL**: `/api/menu/beverages`
- **Method**: `GET`

---

### 5. Detail Makanan (by ID)

Mengambil detail satu makanan berdasarkan ID.

- **URL**: `/api/menu/foods/:id`
- **Method**: `GET`
- **Contoh**: `/api/menu/foods/1`

---

### 6. Detail Minuman (by ID)

Mengambil detail satu minuman berdasarkan ID.

- **URL**: `/api/menu/beverages/:id`
- **Method**: `GET`
- **Contoh**: `/api/menu/beverages/2`

---

### 7. Pencarian Menu (Search)

Mencari item berdasarkan nama, deskripsi, atau tags.

- **URL**: `/api/menu/search?q={keyword}`
- **Method**: `GET`
- **Contoh**:

  ```
  /api/menu/search?q=pedas
  ```

---

## 📤 Contoh Response

### Root Response (`GET /`)

```json
{
  "success": true,
  "message": "API Menu Restoran aktif 🚀",
  "endpoints": {
    "all": "/api/menu",
    "foods": "/api/menu/foods",
    "beverages": "/api/menu/beverages",
    "search": "/api/menu/search?q=keyword",
    "detail_food": "/api/menu/foods/:id",
    "detail_beverage": "/api/menu/beverages/:id"
  }
}
```

---

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

| Field           | Tipe    | Deskripsi                  |
| --------------- | ------- | -------------------------- |
| `id`            | Number  | ID unik produk             |
| `name`          | String  | Nama produk                |
| `price`         | Number  | Harga dalam Rupiah         |
| `is_available`  | Boolean | Status stok                |
| `rating`        | Number  | Rating (1.0 - 5.0)         |
| `total_sold`    | Number  | Jumlah terjual             |
| `tags`          | Array   | Label/kategori tambahan    |
| `description`   | String  | Deskripsi produk           |
| `image`         | String  | URL gambar asli            |
| `image_resized` | String  | URL gambar versi optimized |

---

## 🌐 Deployment

Project menggunakan:

```js
module.exports = app;
```

Agar kompatibel dengan **Vercel**.

Langkah deploy:

1. Push ke GitHub
2. Import ke Vercel
3. Set entry point ke `index.js`

---

## ⚡ Catatan

- Gunakan endpoint detail untuk performa lebih efisien (hindari fetch semua data kalau cuma butuh 1 item).
- Endpoint search sudah mendukung multi-field (name, description, tags).
