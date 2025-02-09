import BackToTop from "@/app/backToTop";
import AboutUsLayout from "./(tentang-kami)";

export const metadata = {
  title: "QuickMath - Tentang Kami",
  description: "Platform Bimbingan Belajar Online",
};

const AboutUsPage = () => {
  return (
    <>
      <AboutUsLayout />

      <BackToTop />
    </>
  );
};

export default AboutUsPage;
