import BackToTop from "@/app/backToTop";
import CourseWithSidebarLayout from "./index";

export const metadata = {
  title: "Course With Sidebar - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CourseWithSidebarPage = () => {
  return (
    <>
      <CourseWithSidebarLayout />

      <BackToTop />
    </>
  );
};

export default CourseWithSidebarPage;
