import BackToTop from "@/app/backToTop";
import QuizWithPoinLayout from "./(point)";

export const metadata = {
  title:
    "Quiz with individual point - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
