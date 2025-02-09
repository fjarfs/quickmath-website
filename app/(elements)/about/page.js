import BackToTop from "@/app/backToTop";
import AboutPage from "./(tentang-kami)";

export const metadata = {
  title: "About - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const AboutLayout = () => {
  return (
    <>
      <AboutPage />

      <BackToTop />
    </>
  );
};

export default AboutLayout;
