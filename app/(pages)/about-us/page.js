import BackToTop from "@/app/backToTop";
import AboutUsLayout from "./(about-us)";

export const metadata = {
  title: "QuickMath - Konsultasi Tugas",
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
