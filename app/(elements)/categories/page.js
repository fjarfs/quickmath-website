import BackToTop from "@/app/backToTop";
import CategoriesPage from "./(categories)";

export const metadata = {
  title: "Categories - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const CategoriesLayout = () => {
  return (
    <>
      <CategoriesPage />

      <BackToTop />
    </>
  );
};

export default CategoriesLayout;
