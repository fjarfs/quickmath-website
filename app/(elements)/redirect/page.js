import BackToTop from "@/app/backToTop";
import RedirectLayout from "./(redirect)";

export const metadata = {
  title: "QuickMath - Redirect Referral",
  description: "Online Courses & Education NEXTJS14 Template",
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
