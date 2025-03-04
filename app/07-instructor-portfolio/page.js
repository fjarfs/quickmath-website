import BackToTop from "../backToTop";
import InstructorPortfolioPage from "./(instructor-portfolio)";

export const metadata = {
  title: "Instructor Portfolio - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const InstructorPortfolioLayout = () => {
  return (
    <>
      <InstructorPortfolioPage />
      <BackToTop />
    </>
  );
};

export default InstructorPortfolioLayout;
