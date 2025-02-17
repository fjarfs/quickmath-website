import BackToTop from "@/app/backToTop";
import ReferralLayout from "./(affiliate)";

export const metadata = {
  title: "QuickMath - Affiliate",
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
