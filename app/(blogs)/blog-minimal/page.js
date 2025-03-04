import BackToTop from "@/app/backToTop";
import BlogGridMinimalPage from "./(blog-minimal)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const BlogGridMinimalLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <BlogGridMinimalPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogGridMinimalLayout;
