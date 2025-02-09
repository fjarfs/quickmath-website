import BackToTop from "@/app/backToTop";
import EventSiderbarPage from "./(event-sidebar)";

export const metadata = {
  title: "Event Siderbar - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const EventSiderbarLayout = () => {
  return (
    <>
      <EventSiderbarPage />

      <BackToTop />
    </>
  );
};

export default EventSiderbarLayout;
