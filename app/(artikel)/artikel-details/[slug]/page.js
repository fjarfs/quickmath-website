import BackToTop from "@/app/backToTop";

import { getPostBySlug, getAllPostsMeta, fetchArticleBySlug } from "@/mdx";
import ArtikelLayout from "../page";
import SingleArtikel from "../index";

const SingleArtikelLayout = async ({ params }) => {
  const articleBySlug = await fetchArticleBySlug(params.slug)

  console.log(articleBySlug);

  return (
    <>
      <SingleArtikel getArticleDetails={articleBySlug}/>
      <BackToTop/>
    </>
  )

};

export default SingleArtikelLayout;
