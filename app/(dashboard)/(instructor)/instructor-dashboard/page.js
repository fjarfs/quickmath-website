import BackToTop from "@/app/backToTop";
import InstructorDashboard from "./(dashboard)";

export const metadata = {
  title: "Instructor Dashboard - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
