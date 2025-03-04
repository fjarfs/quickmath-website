import BackToTop from "@/app/backToTop";
import AdvanceTabPage from "./(advance-tab)";

export const metadata = {
  title: "Advance Tab - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const AdvanceTabLayout = () => {
  return (
    <>
      <AdvanceTabPage />

      <BackToTop />
    </>
  );
};

export default AdvanceTabLayout;
