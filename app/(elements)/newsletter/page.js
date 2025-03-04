import BackToTop from "@/app/backToTop";
import NewsletterPage from "./(newsletter)";

export const metadata = {
  title: "Newsletter - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
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
