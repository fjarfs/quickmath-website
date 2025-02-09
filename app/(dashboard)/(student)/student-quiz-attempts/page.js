import BackToTop from "@/app/backToTop";
import StudentQuiz from "./(quiz-attempts)";

export const metadata = {
  title:
    "Student Quiz Attempts Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const QuizAttemptsLayout = () => {
  return (
    <>
      <StudentQuiz />
      <BackToTop />
    </>
  );
};

export default QuizAttemptsLayout;
