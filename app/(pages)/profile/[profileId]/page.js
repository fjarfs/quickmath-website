import SingleProfile from "../index";

export const metadata = {
  title: "Profile - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const SingleProfileLayout = ({ params }) => {
  return (
    <>
      <SingleProfile getParams={params} />
    </>
  );
};

export default SingleProfileLayout;
