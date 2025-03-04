import BackToTop from "@/app/backToTop";
import RedirectLayout from "./(redirect)";

export const metadata = {
  title: "QuickMath - Redirect Afiliate",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const RedirectPage = () => {
  return (
    <>
      <RedirectLayout />
      <BackToTop />
    </>
  );
};

export default RedirectPage;
