import BackToTop from "@/app/backToTop";
import EventListPage from "./(event-list)";

export const metadata = {
  title: "Event List - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const EventListLayout = () => {
  return (
    <>
      <EventListPage />

      <BackToTop />
    </>
  );
};

export default EventListLayout;
