import BackToTop from "@/app/backToTop";

const { default: KonsultasiLayout } = require("./(konsultasi)");

export const metadata = {
  title: "QuickMath - Konsultasi Tugas",
  description: "Online Courses & Education NEXTJS14 Template",
};

const KonsultasiPage = () => {
  return (
    <>
      <KonsultasiLayout />

      <BackToTop />
    </>
  );
};

export default KonsultasiPage;
