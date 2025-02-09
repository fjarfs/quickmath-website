import BackToTop from "@/app/backToTop";
import StyleGuidePage from "./(style-guide)";

export const metadata = {
  title: "Style Guide - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
