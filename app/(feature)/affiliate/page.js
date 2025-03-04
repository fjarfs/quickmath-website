import BackToTop from "@/app/backToTop";
import ReferralLayout from "./(affiliate)";

export const metadata = {
  title: "QuickMath - Affiliate",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
