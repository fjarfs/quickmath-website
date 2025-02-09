import BackToTop from "./backToTop";
import HomePage from "./landing-page/page";

export const metadata = {
  title: "QuickMath",
  description: "Platform Bimbingan Belajar Online",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
