import BackToTop from "@/app/backToTop";
import LessonPage from "./(lesson)";

export const metadata = {
  title:
    "Questions Below Each Other - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const LessonLayout = () => {
  return (
    <>
      <LessonPage />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
