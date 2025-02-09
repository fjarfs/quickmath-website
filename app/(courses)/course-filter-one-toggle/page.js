import BackToTop from "@/app/backToTop";
import CourseFilterTwoPage from "./index";

export const metadata = {
  title:
    "Course Filter One Toggle - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CourseOneToggleLayout = () => {
  return (
    <>
      <CourseFilterTwoPage />

      <BackToTop />
    </>
  );
};

export default CourseOneToggleLayout;
