import BackToTop from "@/app/backToTop";
import TestimonialPage from "./(testimonial)";

export const metadata = {
  title: "Testimonial - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const TestimonialLayout = () => {
  return (
    <>
      <TestimonialPage />

      <BackToTop />
    </>
  );
};

export default TestimonialLayout;
