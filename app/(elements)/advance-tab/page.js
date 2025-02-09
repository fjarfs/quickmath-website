import BackToTop from "@/app/backToTop";
import AdvanceTabPage from "./(advance-tab)";

export const metadata = {
  title: "Advance Tab - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
