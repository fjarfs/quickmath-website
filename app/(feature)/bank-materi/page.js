import BackToTop from "@/app/backToTop";
import BankMateriLayout from "./(bank-materi)";

export const metadata = {
  title: "QuickMath - Materi",
  description: "Platform Bimbingan Belajar Online",
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
