import BackToTop from "@/app/backToTop";
import AboutUsLayout from "./(about-us)";

export const metadata = {
  title: "QuickMath - Konsultasi Tugas",
  description: "Online Courses & Education NEXTJS14 Template",
};

const AboutUsPage = () => {
  return (
    <>
      <AboutUsLayout />

      <BackToTop />
    </>
  );
};

export default AboutUsPage;
