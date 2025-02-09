import BackToTop from "../backToTop";
import HomeTechnologyPage from "./(home-technology)";

export const metadata = {
  title: "Home Technology - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
