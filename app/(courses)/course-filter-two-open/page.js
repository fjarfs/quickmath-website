import BackToTop from "@/app/backToTop";
import CourseFilteTwoOpen from "./index";

export const metadata = {
  title:
    "Course Filter Two Open - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};
const CourseFilteTwoOpenLayout = () => {
  return (
    <>
      <CourseFilteTwoOpen />
      <BackToTop />
    </>
  );
};

export default CourseFilteTwoOpenLayout;
