import BackToTop from "@/app/backToTop";
import QuestionTypeLayout from "./(types)";

export const metadata = {
  title: "Question Type - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const LessonLayout = () => {
  return (
    <>
      <QuestionTypeLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
