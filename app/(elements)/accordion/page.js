import BackToTop from "@/app/backToTop";
import AccordionPage from "./(accordion)";

export const metadata = {
  title: "Accordion - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
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
