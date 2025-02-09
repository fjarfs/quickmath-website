import BackToTop from "@/app/backToTop";
import HargaPaketLayout from "./(harga-paket)";

export const metadata = {
  title: "QuickMath - Harga Paket",
  description: "Platform Bimbingan Belajar Online",
};

const HargaPaketPage = () => {
  return (
    <>
      <HargaPaketLayout />

      <BackToTop />
    </>
  );
};

export default HargaPaketPage;
