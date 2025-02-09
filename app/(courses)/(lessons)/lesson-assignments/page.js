import BackToTop from "@/app/backToTop";
import LessonAssignmentPage from "./(lesson-assignments)";

export const metadata = {
  title: "Lesson Assignment - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const LessonAssignmentLayout = () => {
  return (
    <>
      <LessonAssignmentPage />
      <BackToTop />
    </>
  );
};

export default LessonAssignmentLayout;
