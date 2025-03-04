import BackToTop from "@/app/backToTop";
import SettingPage from "./(settings)";

export const metadata = {
  title: "Instructor Settings - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SettingLayout = () => {
  return (
    <>
      <SettingPage />

      <BackToTop />
    </>
  );
};

export default SettingLayout;
