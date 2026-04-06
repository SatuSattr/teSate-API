const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Data Menu Restoran Lengkap
const menuData = {
  foods: [
    {
      id: 1,
      name: "Sate Madura",
      price: 25000,
      is_available: true,
      rating: 4.8,
      total_sold: 1250,
      tags: ["Best Seller", "Kacang"],
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
      price: 28000,
      is_available: true,
      rating: 4.7,
      total_sold: 890,
      tags: ["Pedas", "Rempah"],
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
      price: 30000,
      is_available: true,
      rating: 4.9,
      total_sold: 540,
      tags: ["Daging Sapi", "Manis"],
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
      price: 22000,
      is_available: false, // Contoh stok habis
      rating: 4.6,
      total_sold: 320,
      tags: ["Khas Bali", "Ikan/Ayam"],
      description:
        "Sate khas Bali yang terbuat dari daging cincang berpadu parutan kelapa dan bumbu genep.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_lilit.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-resized-compressed/sate_lilit.png",
    },
    {
      id: 5,
      name: "Sate Klathak",
      price: 27000,
      is_available: true,
      rating: 4.7,
      total_sold: 410,
      tags: ["Kambing", "Gurih"],
      description:
        "Sate kambing unik asal Yogyakarta yang dibakar menggunakan jeruji besi.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_klathak.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/c9f74abf3df422a834860050c48bb2941c6bc360/tesate-compressed/sate_klathak.png",
    },
    {
      id: 6,
      name: "Sate Taichan",
      price: 20000,
      is_available: true,
      rating: 4.8,
      total_sold: 2100,
      tags: ["Pedas", "Favorit Remaja"],
      description:
        "Sate ayam bakar polos disajikan segar dengan perasan jeruk nipis dan sambal pedas.",
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
      price: 5000,
      is_available: true,
      rating: 4.9,
      total_sold: 5000,
      tags: ["Segar", "Murah"],
      description: "Minuman teh segar yang disajikan dingin dengan es batu.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/es_teh.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/es_teh.png",
    },
    {
      id: 2,
      name: "Teh Hangat Manis/Tawar",
      price: 4000,
      is_available: true,
      rating: 4.7,
      total_sold: 1200,
      tags: ["Hangat"],
      description: "Seduhan teh hangat yang cocok untuk menenangkan perut.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/teh_hangat.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/teh_hangat.png",
    },
    {
      id: 3,
      name: "Es Jeruk Peras",
      price: 10000,
      is_available: true,
      rating: 4.8,
      total_sold: 950,
      tags: ["Vitamin C", "Segar"],
      description:
        "Minuman sari jeruk asli yang diperas langsung dan disajikan dengan es batu.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/es_jeruk_peras.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/es_jeruk_peras.png",
    },
    {
      id: 4,
      name: "Es Timun Serut",
      price: 12000,
      is_available: true,
      rating: 4.7,
      total_sold: 430,
      tags: ["Tradisional", "Khas Aceh"],
      description: "Minuman pelepas dahaga dari serutan mentimun segar.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/es_timun_serut.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/es_timun_serut.png",
    },
    {
      id: 5,
      name: "Jus Alpukat",
      price: 15000,
      is_available: true,
      rating: 4.8,
      total_sold: 1100,
      tags: ["Buah Asli", "Manis"],
      description: "Jus buah alpukat segar yang kental dan lembut.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/jus_alpukat.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/jus_alpukat.png",
    },
    {
      id: 6,
      name: "Wedang Jahe",
      price: 8000,
      is_available: true,
      rating: 4.9,
      total_sold: 670,
      tags: ["Sehat", "Hangat"],
      description: "Minuman tradisional hangat dari rebusan jahe merah.",
      image:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman/wedang_jahe.png",
      image_resized:
        "https://raw.githubusercontent.com/SatuSattr/foreverdatalink/8816de8fbb506b8a9ab5051a3a72bf8a939f99af/tesate-minuman-resized/wedang_jahe.png",
    },
  ],
};

// --- Endpoints ---

// Helper function untuk filter pencarian
const filterMenu = (data, term) => {
  return data.filter(
    (item) =>
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.tags.some((tag) => tag.toLowerCase().includes(term)),
  );
};

app.get("/api/menu/search", (req, res) => {
  const query = req.query.q;
  if (!query)
    return res
      .status(400)
      .json({ success: false, message: "Query ?q= tidak boleh kosong" });

  const term = query.toLowerCase();
  const filteredFoods = filterMenu(menuData.foods, term);
  const filteredBeverages = filterMenu(menuData.beverages, term);

  res.status(200).json({
    success: true,
    count: filteredFoods.length + filteredBeverages.length,
    results: { foods: filteredFoods, beverages: filteredBeverages },
  });
});

// GET detail food by id
app.get("/api/menu/foods/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = menuData.foods.find((food) => food.id === id);

  if (!item) {
    return res
      .status(404)
      .json({ success: false, message: "Food tidak ditemukan" });
  }

  res.status(200).json({ success: true, data: item });
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Menu Restoran aktif 🚀",
    endpoints: {
      all: "/api/menu",
      foods: "/api/menu/foods",
      beverages: "/api/menu/beverages",
      search: "/api/menu/search?q=keyword",
      detail_food: "/api/menu/foods/:id",
      detail_beverage: "/api/menu/beverages/:id",
    },
  });
});

// GET detail beverage by id
app.get("/api/menu/beverages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = menuData.beverages.find((drink) => drink.id === id);

  if (!item) {
    return res
      .status(404)
      .json({ success: false, message: "Minuman tidak ditemukan" });
  }

  res.status(200).json({ success: true, data: item });
});

app.get("/api/menu", (req, res) =>
  res.status(200).json({ success: true, data: menuData }),
);
app.get("/api/menu/foods", (req, res) =>
  res.status(200).json({ success: true, data: menuData.foods }),
);
app.get("/api/menu/beverages", (req, res) =>
  res.status(200).json({ success: true, data: menuData.beverages }),
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
