import BackToTop from "@/app/backToTop";
import PersonalCoursesPage from "./(personal-courses)";

export const metadata = {
  title:
    "Instructor Personal Courses History Attempts Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
