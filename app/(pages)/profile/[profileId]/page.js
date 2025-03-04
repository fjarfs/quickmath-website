import SingleProfile from "../index";

export const metadata = {
  title: "Profile - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SingleProfileLayout = ({ params }) => {
  return (
    <>
      <SingleProfile getParams={params} />
    </>
  );
};

export default SingleProfileLayout;
