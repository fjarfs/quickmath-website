import BackToTop from "@/app/backToTop";
import LessonQuizLayout from "./(quiz)";

export const metadata = {
  title: "Lesson Quiz - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const LessonQuizPage = () => {
  return (
    <>
      <LessonQuizLayout />
      <BackToTop />
    </>
  );
};

export default LessonQuizPage;
