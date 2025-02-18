import NotFound from "@/components/NotFound/NotFound";

export const metadata = {
  title: "Halaman tidak ditemukan",
  description: "Platform Bimbingan Belajar Online",
};

const ErrorPage = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
