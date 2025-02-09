import BackToTop from "../backToTop";
import UniversityPage from "./(university-classic)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "University Classic - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const UniversityLayout = async () => {
  const blog = await getAllPostsMeta();
  
  return (
    <>
      <UniversityPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default UniversityLayout;
