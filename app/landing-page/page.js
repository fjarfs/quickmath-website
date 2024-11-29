import BackToTop from "../backToTop";
import LandingPageLayout from "./(landing-page)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "QuickMath",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LandingPage = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <LandingPageLayout getBlog={blog} />

      <BackToTop/>
    </>
  );
};

export default LandingPage;
