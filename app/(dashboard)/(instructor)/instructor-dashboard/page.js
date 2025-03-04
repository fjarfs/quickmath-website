import BackToTop from "@/app/backToTop";
import InstructorDashboard from "./(dashboard)";

export const metadata = {
  title: "Instructor Dashboard - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const InstructorDashboardLayout = () => {
  return (
    <>
      <InstructorDashboard />
      <BackToTop />
    </>
  );
};

export default InstructorDashboardLayout;
