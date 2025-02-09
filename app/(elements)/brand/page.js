import BackToTop from "@/app/backToTop";
import BrandPage from "./(brand)";

export const metadata = {
  title: "Brand - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const BrandLayout = () => {
  return (
    <>
      <BrandPage />

      <BackToTop />
    </>
  );
};

export default BrandLayout;
