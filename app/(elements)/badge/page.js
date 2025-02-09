import BackToTop from "@/app/backToTop";
import BadgePage from "./(badge)";

export const metadata = {
  title: "Badge - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
