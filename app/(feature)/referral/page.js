import BackToTop from "@/app/backToTop";
import ReferralLayout from "./(referral)";

export const metadata = {
  title: "QuickMath - Referral",
  description: "Online Courses & Education NEXTJS14 Template",
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
