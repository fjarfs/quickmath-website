import BackToTop from "@/app/backToTop";
import AcademyGallery from "./(academy-gallery)";

export const metadata = {
  title: "Academy Gallery - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const AcademyGalleryLayout = () => {
  return (
    <>
      <AcademyGallery />

      <BackToTop />
    </>
  );
};

export default AcademyGalleryLayout;
