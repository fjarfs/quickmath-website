import BackToTop from "../backToTop";
import SingleCoursePage from "./(single-course)";

export const metadata = {
  title: "Single Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const SingleCourseLayout = () => {
  return (
    <>
      <SingleCoursePage />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayout;
