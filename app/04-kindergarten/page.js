import BackToTop from "../backToTop";
import KindergartenPage from "./(kindergarten)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "KindergartenPage - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const KindergartenLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <KindergartenPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default KindergartenLayout;
