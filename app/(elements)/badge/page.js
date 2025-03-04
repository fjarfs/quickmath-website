import BackToTop from "@/app/backToTop";
import BadgePage from "./(badge)";

export const metadata = {
  title: "Badge - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const BadgeLayout = () => {
  return (
    <>
      <BadgePage />

      <BackToTop />
    </>
  );
};

export default BadgeLayout;
