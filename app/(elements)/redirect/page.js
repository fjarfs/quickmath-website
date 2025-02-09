import BackToTop from "@/app/backToTop";
import RedirectLayout from "./(redirect)";

export const metadata = {
  title: "QuickMath - Redirect Referral",
  description: "Platform Bimbingan Belajar Online",
};

const RedirectPage = () => {
  return (
    <>
      <RedirectLayout />
      <BackToTop />
    </>
  );
};

export default RedirectPage;
