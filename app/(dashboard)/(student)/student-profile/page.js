import BackToTop from "@/app/backToTop";
import StudentProfile from "./(profile)";

export const metadata = {
  title: "Student Profile - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const StudentProfileLayout = () => {
  return (
    <>
      <StudentProfile />
      <BackToTop />
    </>
  );
};

export default StudentProfileLayout;
