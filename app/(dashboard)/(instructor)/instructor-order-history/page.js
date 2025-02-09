import BackToTop from "@/app/backToTop";
import OrderHistoryPage from "./(order-history)";

export const metadata = {
  title:
    "Instructor Order History - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const OrderHistoryLayout = () => {
  return (
    <>
      <OrderHistoryPage />

      <BackToTop />
    </>
  );
};

export default OrderHistoryLayout;
