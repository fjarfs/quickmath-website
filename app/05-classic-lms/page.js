import BackToTop from "../backToTop";
import ClassicLmsPage from "./(classic-lms)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Home Classic Lms - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const ClassicLmsLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <ClassicLmsPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default ClassicLmsLayout;
