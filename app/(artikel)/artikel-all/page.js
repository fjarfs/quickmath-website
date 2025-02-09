import BackToTop from "@/app/backToTop";
import ArtikelAllPage from "./(artikel-all)";
import { fetchArticleBySlug, getAllArticles } from "@/mdx";

export const metadata = {
  title: "QuickMath - Semua Artikel",
  description: "Platform Bimbingan Belajar Online",
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
