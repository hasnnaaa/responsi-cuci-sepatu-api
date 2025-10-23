import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware untuk membaca JSON
app.use(express.json());

// Menggunakan prefix /items untuk semua rute
app.use("/items", itemRoutes);

// Rute dasar
app.get("/", (req, res) => {
  res.send("API Cuci Sepatu Berjalan. Responsi Modul 1 Hasnaa' Amalia Q (21120123140155)");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});