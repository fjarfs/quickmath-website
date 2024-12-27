import BackToTop from "@/app/backToTop";
import TermsConditionPage from "./(terms-conditions)";

export const metadata = {
  title: "Syarat & Ketentuan - QuickMath",
  description: "Online Courses & Education NEXTJS14 Template",
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
