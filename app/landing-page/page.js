import BackToTop from "../backToTop";
import LandingPageLayout from "./(landing-page)";
import { getAllPostsMeta, getServerSideProps } from "@/mdx";

export const metadata = {
  title: "Platform Bimbingan Belajar Online Fokus Pada Pemecahan Masalah",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const LandingPage = async () => {
  // const blog = await getAllPostsMeta();
  const dataSsr = await getServerSideProps();
  return (
    <>
      <LandingPageLayout dataSsr={dataSsr} />

      <BackToTop/>
    </>
  );
};

export default LandingPage;
