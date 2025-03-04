import BackToTop from "@/app/backToTop";

const { default: KonsultasiLayout } = require("./(konsultasi)");

export const metadata = {
  title: "QuickMath - Konsultasi Tugas",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
