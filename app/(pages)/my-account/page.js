import BackToTop from "@/app/backToTop";
import MyAccountPage from "./(my-account)";

export const metadata = {
  title: "My Account - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
