import api from "./api";

// Ambil detail promo berdasarkan slug
export const getDetailPromo = async (slug) => {
  try {
    const res = await api.get(`/promo/${slug}`);
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null; // Return null kalau tidak ditemukan (untuk SSR redirect)
    }
    throw error;
  }
};

// Ambil daftar promo
export const getAllPromos = async () => {
  try {
    const res = await api.get("/promo-all");
    return res.data;
  } catch (error) {
    throw error;
  }
};