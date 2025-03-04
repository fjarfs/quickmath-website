import BackToTop from "@/app/backToTop";
import AdmissionGuidePage from "./(admission-guide)";

export const metadata = {
  title: "Admission Guide - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const AdmissionGuideLayout = () => {
  return (
    <>
      <AdmissionGuidePage />

      <BackToTop />
    </>
  );
};

export default AdmissionGuideLayout;
