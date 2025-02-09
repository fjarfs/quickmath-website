import BackToTop from "@/app/backToTop";
import AboutUsPage from "./(about-us-01)/index";

export const metadata = {
  title: "About Us 01 - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};
const AboutUsLayout = () => {
  return (
    <>
      <AboutUsPage />
      <BackToTop />
    </>
  );
};

export default AboutUsLayout;
