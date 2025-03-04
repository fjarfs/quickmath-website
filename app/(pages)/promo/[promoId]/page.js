import BackToTop from "@/app/backToTop";
import SinglePromo from "../index";

import { getDetailPromo } from "@/services/promoService";

export const metadata = {
  title: "Promo QuickMath Terbaru",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SinglePromoLayout = async ({ params }) => {
  const promoData = await getDetailPromo(params.promoId);

  return (
    <>
      <SinglePromo data={promoData?.data}/>
      <BackToTop />
    </>
  );
};

export default SinglePromoLayout;
