import BackToTop from "@/app/backToTop";
import ProgressbarPage from "./(progressbar)";

export const metadata = {
  title: "Progressbar - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const ProgressbarLayout = () => {
  return (
    <>
      <ProgressbarPage />

      <BackToTop />
    </>
  );
};

export default ProgressbarLayout;
