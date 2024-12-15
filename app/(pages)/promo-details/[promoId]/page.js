import BackToTop from "@/app/backToTop";
import SinglePromo from "../index";

export const metadata = {
  title: "QuickMath - Promo Details",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SinglePromoLayout = ({ params }) => {
  return (
    <>
      <SinglePromo getParams={params} />
      <BackToTop />
    </>
  );
};

export default SinglePromoLayout;
