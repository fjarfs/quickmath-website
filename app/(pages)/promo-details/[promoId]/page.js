import BackToTop from "@/app/backToTop";
import SinglePromo from "../index";

export const metadata = {
  title: "Course Details - Online Courses & Education NEXTJS14 Template",
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
