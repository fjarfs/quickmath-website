import BackToTop from "../backToTop";
import CourseSchoolPage from "./(course-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Course School - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CourseSchoolLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <CourseSchoolPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default CourseSchoolLayout;
