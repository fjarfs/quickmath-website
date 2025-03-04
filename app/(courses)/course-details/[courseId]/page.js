import BackToTop from "@/app/backToTop";
import SingleCourse from "../index";

export const metadata = {
  title: "Course Details - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SingleCourseLayout = ({ params }) => {
  return (
    <>
      <SingleCourse getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayout;
