import BackToTop from "@/app/backToTop";
import EnrolledCoursePage from "./(enrolled-course)";

export const metadata = {
  title: "Enrolled Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const EnrolledCourseLayout = () => {
  return (
    <>
      <EnrolledCoursePage />

      <BackToTop />
    </>
  );
};

export default EnrolledCourseLayout;
