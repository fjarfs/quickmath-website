import BackToTop from "@/app/backToTop";
import AllQuestionsLayout from "./(question)";

export const metadata = {
  title: "Lesson - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const LessonLayout = () => {
  return (
    <>
      <AllQuestionsLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
