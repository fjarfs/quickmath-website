import BackToTop from "@/app/backToTop";
import PersonalCoursesPage from "./(personal-courses)";

export const metadata = {
  title:
    "Student Personal Courses History Attempts Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const PersonalCoursesLayout = () => {
  return (
    <>
      <PersonalCoursesPage />

      <BackToTop />
    </>
  );
};

export default PersonalCoursesLayout;
