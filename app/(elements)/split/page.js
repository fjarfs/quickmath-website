import BackToTop from "@/app/backToTop";
import SplitPage from "./(split)";

export const metadata = {
  title: "Split - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SplitLayout = () => {
  return (
    <>
      <SplitPage />
      <BackToTop />
    </>
  );
};

export default SplitLayout;
