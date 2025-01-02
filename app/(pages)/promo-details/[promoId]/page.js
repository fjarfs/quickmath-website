import BackToTop from "@/app/backToTop";
import SinglePromo from "../index";

import { getAllPromo } from "@/mdx";

export const metadata = {
  title: "QuickMath - Promo Details",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SinglePromoLayout = async ({ params }) => {
  const promoAllData = await getAllPromo();

  return (
    <>
      <SinglePromo getParams={params} getPromo={promoAllData.data}/>
      <BackToTop />
    </>
  );
};

export default SinglePromoLayout;
