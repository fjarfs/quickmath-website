import BackToTop from "@/app/backToTop";
import ProgressbarPage from "./(progressbar)";

export const metadata = {
  title: "Progressbar - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
