import BackToTop from "../backToTop";
import HomeElegantPage from "./(home-elegant)";

export const metadata = {
  title: "Home Elegant - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const HomeElegantLayout = () => {
  return (
    <>
      <HomeElegantPage />
      <BackToTop />
    </>
  );
};

export default HomeElegantLayout;
