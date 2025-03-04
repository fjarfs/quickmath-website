import UniversityStatusPage from "./(university-status)";
import BackToTop from "../backToTop";

export const metadata = {
  title: "University Status - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
