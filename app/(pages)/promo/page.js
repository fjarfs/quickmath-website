import BackToTop from "@/app/backToTop";
import PromoLayout from "./(promo)";

import { getAllPromos } from "@/services/promoService";

export const metadata = {
  title: "Promo QuickMath Terbaru",
  description: "Platform Bimbingan Belajar Online",
};


const PromoPage = async () => {
  const PromoAllData = await getAllPromos();

  return (
    <>
      <PromoLayout PromoData={PromoAllData.data}/>

      <BackToTop />
    </>
  );
};

export default PromoPage;
