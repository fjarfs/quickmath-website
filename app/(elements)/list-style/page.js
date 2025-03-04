import BackToTop from "@/app/backToTop";
import ListStylePage from "./(list-style)";

export const metadata = {
  title: "List Style - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const ListStyleLayout = () => {
  return (
    <>
      <ListStylePage />
      <BackToTop />
    </>
  );
};

export default ListStyleLayout;
