import BackToTop from "@/app/backToTop";
import TermsConditionPage from "./(terms-conditions)";

export const metadata = {
  title: "Syarat & Ketentuan - QuickMath",
  description: "Platform Bimbingan Belajar Online",
};

const TermsConditionLayout = () => {
  return (
    <>
        <TermsConditionPage/>

        <BackToTop/>
    </>
  );
};

export default TermsConditionLayout;
