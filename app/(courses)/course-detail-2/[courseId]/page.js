import BackToTop from "@/app/backToTop";
import SingleCourse from "../index";

export const metadata = {
  title: "Course Details Two - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SingleCourseLayoutTwo = ({ params }) => {
  return (
    <>
      <SingleCourse getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayoutTwo;
