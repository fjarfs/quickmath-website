import BackToTop from "@/app/backToTop";
import ReviewPage from "./(reviews)";

export const metadata = {
  title:
    "Instructor Reviews Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const ReviewLayout = () => {
  return (
    <>
      <ReviewPage />

      <BackToTop />
    </>
  );
};

export default ReviewLayout;
