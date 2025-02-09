import BackToTop from "@/app/backToTop";
import BlogGridPage from "./(blog-grid)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const BlogGridLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogGridPage getAllBlogs={blog} />

      <BackToTop />
    </>
  );
};

export default BlogGridLayout;
