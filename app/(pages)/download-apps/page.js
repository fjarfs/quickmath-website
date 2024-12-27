import BackToTop from "@/app/backToTop";
import DownloadAppsPage from "./(download-apps)";

export const metadata = {
  title: "Download Apps - QuickMath",
  description: "Online Courses & Education NEXTJS14 Template",
};

const DownloadAppsLayout = () => {
  return (
    <>
      <DownloadAppsPage />

      <BackToTop/>
    </>
  );
};

export default DownloadAppsLayout;
