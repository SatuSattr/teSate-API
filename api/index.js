const express = require("express");
const app = express();

// Middleware untuk format JSON
app.use(express.json());

// Data Menu Restoran
const menuData = {
  foods: [
    {
      id: 1,
      name: "Sate Madura",
      description:
        "Sate ayam khas Madura yang disajikan dengan bumbu kacang kental, manis, dan gurih.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_madura.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-resized-compressed/sate_madura.png",
    },
    {
      id: 2,
      name: "Sate Padang",
      description:
        "Sate sapi lezat dengan siraman kuah bumbu kuning kental yang kaya akan rempah khas Minang.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_padang.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-resized-compressed/sate_padang.png",
    },
    {
      id: 3,
      name: "Sate Maranggi",
      description:
        "Sate daging sapi khas Purwakarta yang dimarinasi dengan rempah dan kecap manis sebelum dibakar.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_maranggi.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-resized-compressed/sate_maranggi.png",
    },
    {
      id: 4,
      name: "Sate Lilit",
      description:
        "Sate khas Bali yang terbuat dari daging cincang berpadu parutan kelapa dan bumbu genep, dililitkan pada batang serai.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_lilit.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-resized-compressed/sate_lilit.png",
    },
    {
      id: 5,
      name: "Sate Klathak",
      description:
        "Sate kambing unik asal Yogyakarta yang dibakar menggunakan jeruji besi dengan bumbu sederhana garam dan lada.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_klathak.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_klathak.png",
    },
    {
      id: 6,
      name: "Sate Taichan",
      description:
        "Sate ayam bakar polos tanpa bumbu kacang, disajikan segar dengan perasan jeruk nipis dan sambal pedas.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_taichan.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-resized-compressed/sate_taichan.png",
    },
  ],
  beverages: [
    {
      id: 1,
      name: "Es Teh Manis/Tawar",
      description:
        "Minuman teh segar yang disajikan dingin dengan es batu, bebas pilih menggunakan gula atau tanpa gula.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/es_teh.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/es_teh.png",
    },
    {
      id: 2,
      name: "Teh Hangat Manis/Tawar",
      description:
        "Seduhan teh hangat yang cocok untuk menenangkan perut, tersedia dalam pilihan manis atau tawar.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/teh_hangat.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/teh_hangat.png",
    },
    {
      id: 3,
      name: "Es Jeruk Peras",
      description:
        "Minuman sari jeruk asli yang diperas langsung dan disajikan dengan es batu, kaya akan vitamin C.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/es_jeruk_peras.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/es_jeruk_peras.png",
    },
    {
      id: 4,
      name: "Es Timun Serut",
      description:
        "Minuman pelepas dahaga dari serutan mentimun segar, sering disajikan dengan tambahan sirup atau jeruk nipis.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/es_timun_serut.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/es_timun_serut.png",
    },
    {
      id: 5,
      name: "Jus Alpukat",
      description:
        "Jus buah alpukat segar yang kental dan lembut, disajikan dengan lilitan susu kental manis cokelat.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/jus_alpukat.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/jus_alpukat.png",
    },
    {
      id: 6,
      name: "Wedang Jahe",
      description:
        "Minuman tradisional hangat dari rebusan jahe merah dan gula merah yang berkhasiat menghangatkan tubuh.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/wedang_jahe.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/wedang_jahe.png",
    },
  ],
};

// Route: Root / Endpoint utama
app.get("/", (req, res) => {
  res.json({
    message: "Selamat datang di API Restoran",
    endpoints: {
      all_menu: "/api/menu",
      foods: "/api/menu/foods",
      beverages: "/api/menu/beverages",
    },
  });
});

// Route: Semua Menu
app.get("/api/menu", (req, res) => {
  res.status(200).json({
    success: true,
    data: menuData,
  });
});

// Route: Khusus Makanan
app.get("/api/menu/foods", (req, res) => {
  res.status(200).json({
    success: true,
    data: menuData.foods,
  });
});

// Route: Khusus Minuman
app.get("/api/menu/beverages", (req, res) => {
  res.status(200).json({
    success: true,
    data: menuData.beverages,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});

module.exports = app;
