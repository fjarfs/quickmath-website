import BackToTop from "@/app/backToTop";
import { getAllPostsMeta } from "@/mdx";
import BlogWithSidebarPage from "./(blog-sidebar)";

export const metadata = {
  title: "Blog With Sidebar- Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const BlogWithSidebarLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogWithSidebarPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogWithSidebarLayout;
