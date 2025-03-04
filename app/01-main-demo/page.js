import HomePageLayout from "./(main-demo)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "QuickMath - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
