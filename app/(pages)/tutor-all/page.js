import BackToTop from "@/app/backToTop";
import TutorAllLayout from "./(tutor-all)";

export const metadata = {
  title: "QuickMath - Semua Tutor",
  description: "Online Courses & Education NEXTJS14 Template",
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
