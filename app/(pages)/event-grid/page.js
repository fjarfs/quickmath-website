import BackToTop from "@/app/backToTop";
import EventGridPage from "./(event-grid)";

export const metadata = {
  title: "Event Grid - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const EventGridLayout = () => {
  return (
    <>
      <EventGridPage />

      <BackToTop />
    </>
  );
};

export default EventGridLayout;
