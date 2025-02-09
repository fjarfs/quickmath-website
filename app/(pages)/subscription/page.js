import BackToTop from "@/app/backToTop";
import SubscriptionPage from "./(subscription)";

export const metadata = {
  title: "Subscription - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const SubscriptionLayout = () => {
  return (
    <>
      <SubscriptionPage />

      <BackToTop />
    </>
  );
};

export default SubscriptionLayout;
