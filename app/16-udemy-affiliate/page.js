import BackToTop from "../backToTop";
import UdemyAffiliatePage from "./(udemy-affiliate)";

export const metadata = {
  title: "Udemy Affiliate - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const UdemyAffiliateLayout = () => {
  return (
    <>
      <UdemyAffiliatePage />
      <BackToTop />
    </>
  );
};

export default UdemyAffiliateLayout;
