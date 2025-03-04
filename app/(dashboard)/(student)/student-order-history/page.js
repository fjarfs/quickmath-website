import BackToTop from "@/app/backToTop";
import StudentStory from "./(order-history)";

export const metadata = {
  title:
    "Student Order History Attempts Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const OrderHistoryLayout = () => {
  return (
    <>
      <StudentStory />

      <BackToTop />
    </>
  );
};

export default OrderHistoryLayout;
