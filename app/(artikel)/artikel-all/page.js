import BackToTop from "@/app/backToTop";
import { getAllPostsMeta } from "@/mdx";
import ArtikelAllPage from "./(artikel-all)";

export const metadata = {
  title: "QuickMath - Semua Artikel",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ArtikelAllLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <ArtikelAllPage getAllBlogs={blog} />

      <BackToTop />
    </>
  );
};

export default ArtikelAllLayout;
