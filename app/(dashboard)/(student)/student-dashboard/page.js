import BackToTop from "@/app/backToTop";
import StudentDashboard from "./(dashboard)";

export const metadata = {
  title: "Student Dashboard - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const StudentDashboardLayout = () => {
  return (
    <>
      <StudentDashboard />
      <BackToTop />
    </>
  );
};

export default StudentDashboardLayout;
