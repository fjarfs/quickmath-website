import BackToTop from "@/app/backToTop";
import CardPage from "./(card)";

export const metadata = {
  title: "Card - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CardLayout = () => {
  return (
    <>
      <CardPage />

      <BackToTop />
    </>
  );
};

export default CardLayout;
