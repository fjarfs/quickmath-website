import SingleProductPage from "../index";

export const metadata = {
  title: "Single Product - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SingleProductLayout = ({ params }) => {
  return (
    <>
      <SingleProductPage getParams={params} />
    </>
  );
};

export default SingleProductLayout;
