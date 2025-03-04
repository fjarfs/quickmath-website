import BackToTop from "@/app/backToTop";
import SingleCoursePage from "./index";

export const metadata = {
  title:
    "Course Filter One Toggle - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const Page = ({ params }) => {
  return (
    <>
      <SingleCoursePage getParams={params} />

      <BackToTop />
    </>
  );
};

export default Page;
