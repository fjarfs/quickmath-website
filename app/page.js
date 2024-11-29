import BackToTop from "./backToTop";
import HomePage from "./landing-page/page";

export const metadata = {
  title: "QuickMath",
  description: "Online Courses & Education NEXTJS14 Template",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
