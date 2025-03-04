import BackToTop from "@/app/backToTop";
import StudentReviews from "./(reviews)";

export const metadata = {
  title:
    "Student Reviews Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const ReviewLayout = () => {
  return (
    <>
      <StudentReviews />

      <BackToTop />
    </>
  );
};

export default ReviewLayout;
