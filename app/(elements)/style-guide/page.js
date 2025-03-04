import BackToTop from "@/app/backToTop";
import StyleGuidePage from "./(style-guide)";

export const metadata = {
  title: "Style Guide - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const StyleGuideLayout = () => {
  return (
    <>
      <StyleGuidePage />
      <BackToTop />
    </>
  );
};

export default StyleGuideLayout;
