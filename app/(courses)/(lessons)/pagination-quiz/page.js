import BackToTop from "@/app/backToTop";
import PaginationQuizLayout from "./(pagination)";

export const metadata = {
  title: "Pagination Quiz - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const LessonLayout = () => {
  return (
    <>
      <PaginationQuizLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
