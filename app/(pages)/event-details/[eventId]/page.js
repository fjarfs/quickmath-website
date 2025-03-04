import BackToTop from "@/app/backToTop";
import SingleEvent from "../index";

export const metadata = {
  title: "Event Details - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
