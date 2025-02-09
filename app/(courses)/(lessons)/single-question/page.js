import BackToTop from "@/app/backToTop";
import SingleQuestionLayout from "./(single)";

export const metadata = {
  title: "Single Question - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const LessonLayout = () => {
  return (
    <>
      <SingleQuestionLayout />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
