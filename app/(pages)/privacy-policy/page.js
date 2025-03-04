import BackToTop from "@/app/backToTop";
import PrivacyPolicyPage from "./(privacy-policy)";

export const metadata = {
  title: "Kebijakan Privasi - QuickMath",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
