import BackToTop from "@/app/backToTop";
import CourseMasonryLayout from "./index";

export const metadata = {
  title: "Course Masonry - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
