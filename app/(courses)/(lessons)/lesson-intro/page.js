import BackToTop from "@/app/backToTop";
import LessonIntroPage from "./(intro)";

export const metadata = {
  title: "Lesson Intro - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const LessonIntroLayout = () => {
  return (
    <>
      <LessonIntroPage />
      <BackToTop />
    </>
  );
};

export default LessonIntroLayout;
