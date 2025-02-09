import BackToTop from "../backToTop";
import ClassicLmsPage from "./(classic-lms)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Home Classic Lms - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
