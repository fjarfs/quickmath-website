import BackToTop from "@/app/backToTop";
import QuizAttemptsPage from "./(quiz-attempts)";

export const metadata = {
  title:
    "Instructor Quiz Attempts Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
