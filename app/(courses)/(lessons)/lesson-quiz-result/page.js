import BackToTop from "@/app/backToTop";
import LessonQuizResultLayout from "./(quiz-result)";

export const metadata = {
  title: "Lesson Quiz Result - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const LessonQuizResultPage = () => {
  return (
    <>
      <LessonQuizResultLayout />
      <BackToTop />
    </>
  );
};

export default LessonQuizResultPage;
