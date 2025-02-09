import BackToTop from "@/app/backToTop";
import SingleEvent from "../index";

export const metadata = {
  title: "Event Details - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const SingleEventLayout = ({ params }) => {

  return (
    <>
      <SingleEvent getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleEventLayout;
