import BackToTop from "../backToTop";
import InstructorPortfolioPage from "./(instructor-portfolio)";

export const metadata = {
  title: "Instructor Portfolio - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
