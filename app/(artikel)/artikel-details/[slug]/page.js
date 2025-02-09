import BackToTop from "@/app/backToTop";

import { getPostBySlug, getAllPostsMeta, fetchArticleBySlug } from "@/mdx";
import ArtikelLayout from "../../artikel-details/page";
import SingleArtikel from "../../artikel-details/index";

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
