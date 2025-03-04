import NotFound from "@/components/NotFound/NotFound";

export const metadata = {
  title: "Halaman tidak ditemukan",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const ErrorPage = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
