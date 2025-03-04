import BackToTop from "../backToTop";
import HomeTechnologyPage from "./(home-technology)";

export const metadata = {
  title: "Home Technology - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const HomeTechnologyLayout = () => {
  return (
    <>
      <HomeTechnologyPage />
      <BackToTop />
    </>
  );
};

export default HomeTechnologyLayout;
