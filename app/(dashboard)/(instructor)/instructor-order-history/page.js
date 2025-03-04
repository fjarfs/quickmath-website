import BackToTop from "@/app/backToTop";
import OrderHistoryPage from "./(order-history)";

export const metadata = {
  title:
    "Instructor Order History - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
