import BackToTop from "@/app/backToTop";
import SinglePromo from "../index";

import { getDetailPromo } from "@/services/promoService";

export const metadata = {
  title: "Promo QuickMath Terbaru",
  description: "Platform Bimbingan Belajar Online",
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
