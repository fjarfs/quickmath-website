import BackToTop from "@/app/backToTop";
import NewsletterPage from "./(newsletter)";

export const metadata = {
  title: "Newsletter - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const NewsletterLayout = () => {
  return (
    <>
      <NewsletterPage />
      <BackToTop />
    </>
  );
};

export default NewsletterLayout;
