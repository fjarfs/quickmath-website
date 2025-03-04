import BackToTop from "@/app/backToTop";
import SearchPage from "./(search)";

export const metadata = {
  title: "Search - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const SearchLayout = () => {
  return (
    <>
      <SearchPage />

      <BackToTop />
    </>
  );
};

export default SearchLayout;
