import BackToTop from "../backToTop";
import LandingPageLayout from "./(landing-page)";
import { getAllPostsMeta, getServerSideProps } from "@/mdx";

export const metadata = {
  title: "QuickMath",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LandingPage = async () => {
  const blog = await getAllPostsMeta();
  const dataPromo = await getServerSideProps();
  return (
    <>
      <LandingPageLayout getBlog={blog} data={dataPromo} />

      <BackToTop/>
    </>
  );
};

export default LandingPage;
