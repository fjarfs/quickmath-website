import UniversityStatusPage from "./(university-status)";
import BackToTop from "../backToTop";

export const metadata = {
  title: "University Status - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const UniversityStatusLayout = () => {
  return (
    <>
      <UniversityStatusPage />
      <BackToTop />
    </>
  );
};

export default UniversityStatusLayout;
