import LandingPageLayout from "./(landing-page)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Histudy - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LandingPage = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <LandingPageLayout getBlog={blog} />
    </>
  );
};

export default LandingPage;
