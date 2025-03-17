import api from "./api";

// Store referral code ip
export const storeReferralCodeIp = async (referralCode) => {
  try {
    const res = await api.post(process.env.NEXT_PUBLIC_API_URL + `/check-referral-code`, {
      referral_code: referralCode,
    });
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null; // Return null kalau tidak ditemukan (untuk SSR redirect)
    }
    throw error;
  }
};