import BackToTop from "@/app/backToTop";
import HargaPaketLayout from "./(harga)";

export const metadata = {
  title: "QuickMath - Harga",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
