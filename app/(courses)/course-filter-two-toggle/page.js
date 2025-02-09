import BackToTop from "@/app/backToTop";
import CourseFilteTwoTogglePage from "./index";

export const metadata = {
  title:
    "Course Filter Two Toggle - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CourseFilteTwoToggleLayout = () => {
  return (
    <>
      <CourseFilteTwoTogglePage />
      <BackToTop />
    </>
  );
};

export default CourseFilteTwoToggleLayout;
