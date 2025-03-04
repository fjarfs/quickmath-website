import BackToTop from "@/app/backToTop";
import TutorAllLayout from "./(tutor)";

export const metadata = {
  title: "QuickMath - Semua Tutor",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
