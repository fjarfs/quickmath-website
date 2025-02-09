import BackToTop from "@/app/backToTop";
import CounterPage from "./(counter)";

export const metadata = {
  title: "Counter - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
