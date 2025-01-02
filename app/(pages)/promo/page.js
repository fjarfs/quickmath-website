import BackToTop from "@/app/backToTop";
import PromoLayout from "./(promo)";

import { getAllPromo } from "@/mdx";

export const metadata = {
  title: "QuickMath - Semua Promo",
  description: "Online Courses & Education NEXTJS14 Template",
};


const PromoPage = async () => {
  const PromoAllData = await getAllPromo();

  return (
    <>
      <PromoLayout PromoData={PromoAllData.data}/>

      <BackToTop />
    </>
  );
};

export default PromoPage;
