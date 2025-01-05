import BackToTop from "@/app/backToTop";
import ArtikelAllPage from "./(artikel-all)";
import { getAllArticles } from "@/mdx";

export const metadata = {
  title: "QuickMath - Semua Artikel",
  description: "Online Courses & Education NEXTJS14 Template",
};

const ArtikelAllLayout = async () => {
  // const blog = await getAllPostsMeta();
  const articles = await getAllArticles();

  return (
    <>
      <ArtikelAllPage getAllBlogs={articles} />

      <BackToTop />
    </>
  );
};

export default ArtikelAllLayout;
