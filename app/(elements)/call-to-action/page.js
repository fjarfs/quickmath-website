import BackToTop from "@/app/backToTop";
import CallToActionPage from "./(call-to-action)";

export const metadata = {
  title: "Call To Action - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CallToActionLayout = () => {
  return (
    <>
      <CallToActionPage />

      <BackToTop />
    </>
  );
};

export default CallToActionLayout;
