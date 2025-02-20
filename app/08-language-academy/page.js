import BackToTop from "../backToTop";
import LanguageAcademyPage from "./(language-academy)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Language Academy - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const LanguageAcademyLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <LanguageAcademyPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default LanguageAcademyLayout;
