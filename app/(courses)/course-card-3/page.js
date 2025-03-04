import BackToTop from "@/app/backToTop";
import CourseCardThreeLayout from "./index";

export const metadata = {
  title: "Course Five - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const CourseCardThreePage = () => {
  return (
    <>
      <CourseCardThreeLayout />
      <BackToTop />
    </>
  );
};

export default CourseCardThreePage;
