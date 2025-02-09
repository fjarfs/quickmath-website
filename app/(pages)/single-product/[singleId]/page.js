import SingleProductPage from "../index";

export const metadata = {
  title: "Single Product - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const SingleProductLayout = ({ params }) => {
  return (
    <>
      <SingleProductPage getParams={params} />
    </>
  );
};

export default SingleProductLayout;
