import BackToTop from "@/app/backToTop";
import DownloadAppsLayout from "./(download-apps)";

export const metadata = {
  title: "Download Apps - QuickMath",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const DownloadAppsPage = () => {
  return (
    <>
      <DownloadAppsLayout />

      <BackToTop/>
    </>
  );
};

export default DownloadAppsPage;
