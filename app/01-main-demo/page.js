import HomePageLayout from "./(main-demo)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "QuickMath - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const HomePage = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <HomePageLayout getBlog={blog} />
    </>
  );
};

export default HomePage;
