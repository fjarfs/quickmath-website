import BackToTop from "@/app/backToTop";
import MyAccountPage from "./(my-account)";

export const metadata = {
  title: "My Account - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const MyAccountLayout = () => {
  return (
    <>
      <MyAccountPage />

      <BackToTop />
    </>
  );
};

export default MyAccountLayout;
