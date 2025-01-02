import BackToTop from "@/app/backToTop";
import BankMateriLayout from "./(bank-materi)";

export const metadata = {
  title: "QuickMath - Bank Materi",
  description: "Online Courses & Education NEXTJS14 Template",
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
