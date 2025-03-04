import BackToTop from "@/app/backToTop";
import QuizWithTimeLayout from "./(timer)";

export const metadata = {
  title:
    "Quiz With Custom Timer - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const LessonLayout = () => {
  return (
    <>
      <QuizWithTimeLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
