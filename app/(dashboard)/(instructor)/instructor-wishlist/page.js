import BackToTop from "@/app/backToTop";
import WishlistPage from "./(wishlist)";

export const metadata = {
  title:
    "Instructor Wishlist Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const WishlistLayout = () => {
  return (
    <>
      <WishlistPage />
      <BackToTop />
    </>
  );
};

export default WishlistLayout;
