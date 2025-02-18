import BackToTop from "@/app/backToTop";
import ArtikelAllPage from "./(artikel)";
import { index } from "@/services/articleService";

export const metadata = {
  title: "Artikel Menarik dari QuickMath",
  description: "Platform Bimbingan Belajar Online",
};

const ArtikelAllLayout = async () => {
  const articles = await index();

  return (
    <>
      <ArtikelAllPage getAllBlogs={articles} />

      <BackToTop />
    </>
  );
};

export default ArtikelAllLayout;
