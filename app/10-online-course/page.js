import BackToTop from "../backToTop";
import OnlineCoursePage from "./(online-course)";

export const metadata = {
  title: "Online Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const OnlineCourseLayout = () => {
  return (
    <>
      <OnlineCoursePage />
      <BackToTop />
    </>
  );
};

export default OnlineCourseLayout;
