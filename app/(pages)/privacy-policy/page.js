import BackToTop from "@/app/backToTop";
import PrivacyPolicyPage from "./(privacy-policy)";

export const metadata = {
  title: "Kebijakan Privasi - QuickMath",
  description: "Platform Bimbingan Belajar Online",
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
