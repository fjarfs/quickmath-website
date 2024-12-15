import BackToTop from "@/app/backToTop";

import { getPostBySlug, getAllPostsMeta } from "@/mdx";
import ArtikelLayout from "../page";
import SingleArtikel from "../index";

const getPageContent = async (slug) => {
  try {
    const { meta, content } = await getPostBySlug(slug);
    return { meta, content };
  } catch (error) {
    <ArtikelLayout />;
  }
};

export async function generateMetadata({ params }) {
  try {
    const { meta } = await getPageContent(params.slug);
    return { title: meta.title };
  } catch (error) {
    <ArtikelLayout />;
  }
}

const SingleArtikelLayout = async ({ params }) => {
  try {
    const { content } = await getPageContent(params.slug);

    const blog = await getAllPostsMeta();

    return (
      <>
        <SingleArtikel getParams={content} getAllblog={blog} />
        <BackToTop />
      </>
    );
  } catch (error) {
    <ArtikelLayout />;
  }

  const extractNumberFromPathname = (pathname) => {
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];
    const match = lastPart.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  };

  const blogId = extractNumberFromPathname(params.slug);

  if (blogId > 14) {
    return <ArtikelLayout />;
  }
};

export default SingleArtikelLayout;
