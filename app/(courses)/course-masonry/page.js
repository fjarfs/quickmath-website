import BackToTop from "@/app/backToTop";
import CourseMasonryLayout from "./index";

export const metadata = {
  title: "Course Masonry - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const CourseMasonryPage = () => {
  return (
    <>
      <CourseMasonryLayout />

      <BackToTop />
    </>
  );
};

export default CourseMasonryPage;
