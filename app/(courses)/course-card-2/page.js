import BackToTop from "@/app/backToTop";
import CourseCardTwoPage from "./index";

export const metadata = {
  title: "Course Four - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CourseCardFourLayout = () => {
  return (
    <>
      <CourseCardTwoPage />

      <BackToTop />
    </>
  );
};

export default CourseCardFourLayout;
