import BackToTop from "@/app/backToTop";
import QuizWithPoinLayout from "./(point)";

export const metadata = {
  title:
    "Quiz with individual point - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const LessonLayout = () => {
  return (
    <>
      <QuizWithPoinLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
