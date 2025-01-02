import BackToTop from "@/app/backToTop";
import DownloadAppsLayout from "./(download-apps)";

export const metadata = {
  title: "Download Apps - QuickMath",
  description: "Online Courses & Education NEXTJS14 Template",
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
