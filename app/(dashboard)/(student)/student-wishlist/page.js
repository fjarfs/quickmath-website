import BackToTop from "@/app/backToTop";
import WishlistPage from "./(wishlist)";

export const metadata = {
  title:
    "Student Wishlist Course - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
