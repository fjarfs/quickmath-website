import BackToTop from "@/app/backToTop";
import PrivacyPolicyPage from "./(privacy-policy)";

export const metadata = {
  title: "Kebijakan Privasi - QuickMath",
  description: "Online Courses & Education NEXTJS14 Template",
};

const PrivacyPolicyLayout = () => {
  return (
    <>
      <PrivacyPolicyPage />

      <BackToTop/>
    </>
  );
};

export default PrivacyPolicyLayout;
