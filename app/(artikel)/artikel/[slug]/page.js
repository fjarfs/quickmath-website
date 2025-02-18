import BackToTop from "@/app/backToTop";

import SingleArtikel from "../index";
import { show } from "@/services/articleService";

export const metadata = {
  title: "Artikel Terbaru dari QuickMath",
  description: "Platform Bimbingan Belajar Online",
};

const SingleArtikelLayout = async ({ params }) => {
  const data = await show(params.slug)

  return (
    <>
      <SingleArtikel data={data?.data}/>
      <BackToTop/>
    </>
  )

};

export default SingleArtikelLayout;
