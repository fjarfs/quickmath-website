import BackToTop from "@/app/backToTop";

const { default: KonsultasiLayout } = require("./(konsultasi)");

export const metadata = {
  title: "QuickMath - Konsultasi Tugas",
  description: "Platform Bimbingan Belajar Online",
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
