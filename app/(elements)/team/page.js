import BackToTop from "@/app/backToTop";
import InstructorPage from "./(team)";

export const metadata = {
  title: "Instructor - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
