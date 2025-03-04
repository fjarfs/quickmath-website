import BackToTop from "@/app/backToTop";
import BankMateriLayout from "./(materi)";

export const metadata = {
  title: "QuickMath - Materi",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const BankMateriPage = () => {
  return (
    <>
      <BankMateriLayout />
      <BackToTop />
    </>
  );
};

export default BankMateriPage;
