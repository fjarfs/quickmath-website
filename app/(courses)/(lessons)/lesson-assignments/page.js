import BackToTop from "@/app/backToTop";
import LessonAssignmentPage from "./(lesson-assignments)";

export const metadata = {
  title: "Lesson Assignment - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
