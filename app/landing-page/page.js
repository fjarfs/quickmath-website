import BackToTop from "../backToTop";
import LandingPageLayout from "./(landing-page)";
import { getAllPostsMeta, getServerSideProps } from "@/mdx";

export const metadata = {
  title: "QuickMath",
  description: "Platform Bimbingan Belajar Online",
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
