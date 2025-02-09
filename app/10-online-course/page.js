import BackToTop from "../backToTop";
import OnlineCoursePage from "./(online-course)";

export const metadata = {
  title: "Online Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
