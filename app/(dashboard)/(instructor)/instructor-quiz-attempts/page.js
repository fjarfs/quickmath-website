import BackToTop from "@/app/backToTop";
import QuizAttemptsPage from "./(quiz-attempts)";

export const metadata = {
  title:
    "Instructor Quiz Attempts Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const QuizAttemptsLayout = () => {
  return (
    <>
      <QuizAttemptsPage />
      <BackToTop />
    </>
  );
};

export default QuizAttemptsLayout;
