import BackToTop from "@/app/backToTop";
import TestimoniLayout from "./(testimoni)";

export const metadata = {
  title: "QuickMath - Testimoni",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const TestimoniPage = () => {
  return (
    <>
      <TestimoniLayout />

      <BackToTop />
    </>
  );
};

export default TestimoniPage;
