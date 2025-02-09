import BackToTop from "@/app/backToTop";
import InstructorPage from "./(team)";

export const metadata = {
  title: "Instructor - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const InstructorLayout = () => {
  return (
    <>
      <InstructorPage />
      <BackToTop />
    </>
  );
};

export default InstructorLayout;
