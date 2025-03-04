import BackToTop from "@/app/backToTop";
import AboutPage from "./(about)";

export const metadata = {
  title: "About - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
