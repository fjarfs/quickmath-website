import BackToTop from "@/app/backToTop";
import TestimonialPage from "./(testimonial)";

export const metadata = {
  title: "Testimonial - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
