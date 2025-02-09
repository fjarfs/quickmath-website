import BackToTop from "@/app/backToTop";
import InstructorProfile from "./(profile)";

export const metadata = {
  title: "Instructor Profile - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const InstructorProfileLayout = () => {
  return (
    <>
      <InstructorProfile />
      <BackToTop />
    </>
  );
};

export default InstructorProfileLayout;
