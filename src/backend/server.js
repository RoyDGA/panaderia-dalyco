import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Producto from "./models/producto.js"; // 👈 IMPORTANTE

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 Conectado a MongoDB Atlas"))
  .catch(err => console.error("❌ Error al conectar:", err));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando");
});

// Crear producto
app.post("/productos", async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Listar productos
app.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
});

