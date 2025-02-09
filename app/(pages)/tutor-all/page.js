import BackToTop from "@/app/backToTop";
import TutorAllLayout from "./(tutor-all)";

export const metadata = {
  title: "QuickMath - Semua Tutor",
  description: "Platform Bimbingan Belajar Online",
};

const TutorAllPage = () => {
  return (
    <>
      <TutorAllLayout />

      <BackToTop />
    </>
  );
};

export default TutorAllPage;
