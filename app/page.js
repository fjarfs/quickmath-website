import BackToTop from "./backToTop";
import HomePage from "./landing-page/page";

export const metadata = {
  title: "Platform Bimbingan Belajar Online Fokus Pada Pemecahan Masalah - QuickMath",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
