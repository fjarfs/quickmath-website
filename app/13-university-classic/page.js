import BackToTop from "../backToTop";
import UniversityPage from "./(university-classic)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "University Classic - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
