import BackToTop from "@/app/backToTop";
import ReferralLayout from "./(referral)";

export const metadata = {
  title: "QuickMath - Referral",
  description: "Platform Bimbingan Belajar Online",
};

const ReferralPage = () => {
  return (
    <>
      <ReferralLayout />
      <BackToTop />
    </>
  );
};

export default ReferralPage;
