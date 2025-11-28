import axios from "axios";

// URL de tu backend
const API_URL = "http://localhost:4000";

export const getProductos = async () => {
  try {
    const res = await axios.get(`${API_URL}/productos`);
    return res.data;
  } catch (err) {
    console.error("Error al obtener productos:", err);
    throw err;
  }
};


