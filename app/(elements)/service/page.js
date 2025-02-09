import BackToTop from "@/app/backToTop";
import ServicePage from "./(service)";

export const metadata = {
  title: "Service Box - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const ServiceLayout = () => {
  return (
    <>
      <ServicePage />
      <BackToTop />
    </>
  );
};

export default ServiceLayout;
