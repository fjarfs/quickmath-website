import BackToTop from "../backToTop";
import UdemyAffiliatePage from "./(udemy-affiliate)";

export const metadata = {
  title: "Udemy Affiliate - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
