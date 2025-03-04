import BackToTop from "../backToTop";
import MarketplacePage from "./(marketplace)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Marketplace - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const MarketplaceLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <MarketplacePage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default MarketplaceLayout;
