import BackToTop from "@/app/backToTop";
import PromoLayout from "./(promo)";

export const metadata = {
  title: "QuickMath - Konsultasi Tugas",
  description: "Online Courses & Education NEXTJS14 Template",
};

const PromoPage = () => {
  return (
    <>
      <PromoLayout />

      <BackToTop />
    </>
  );
};

export default PromoPage;
