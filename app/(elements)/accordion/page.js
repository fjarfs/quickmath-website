import BackToTop from "@/app/backToTop";
import AccordionPage from "./(accordion)";

export const metadata = {
  title: "Accordion - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const AccordionLayout = () => {
  return (
    <>
      <AccordionPage />

      <BackToTop />
    </>
  );
};

export default AccordionLayout;
