import BackToTop from "../backToTop";
import OnlineSchoolPage from "./(online-school)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Online School - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};


const OnlineSchoolLayout =async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <OnlineSchoolPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default OnlineSchoolLayout;
