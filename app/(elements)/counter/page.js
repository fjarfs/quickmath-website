import BackToTop from "@/app/backToTop";
import CounterPage from "./(counter)";

export const metadata = {
  title: "Counter - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const CounterLayout = () => {
  return (
    <>
      <CounterPage />

      <BackToTop />
    </>
  );
};

export default CounterLayout;
