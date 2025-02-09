import BackToTop from "../backToTop";
import KindergartenPage from "./(kindergarten)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "KindergartenPage - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
