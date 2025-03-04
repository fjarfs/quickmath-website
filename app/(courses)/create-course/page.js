import BackToTop from "@/app/backToTop";
import CreateCoursePage from "./index";

export const metadata = {
  title: "Create  Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const CreateCourseLayout = () => {
  return (
    <>
      <CreateCoursePage />

      <BackToTop />
    </>
  );
};

export default CreateCourseLayout;
