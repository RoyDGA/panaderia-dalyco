import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true},
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },

});

export default mongoose.model("Producto", ProductoSchema);
