import BackToTop from "@/app/backToTop";
import AnnouncementsPage from "./(announcements)";

export const metadata = {
  title:
    "Instructor Announcements - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const AnnouncementsLayout = () => {
  return (
    <>
      <AnnouncementsPage />
      <BackToTop />
    </>
  );
};

export default AnnouncementsLayout;
