import BackToTop from "@/app/backToTop";
import CategoriesPage from "./(categories)";

export const metadata = {
  title: "Categories - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
