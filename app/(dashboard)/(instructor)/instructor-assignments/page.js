import BackToTop from "@/app/backToTop";
import AssignmentsPage from "./(assignments)";

export const metadata = {
  title:
    "Instructor Assignments - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const AssignmentsLayout = () => {
  return (
    <>
      <AssignmentsPage />

      <BackToTop />
    </>
  );
};

export default AssignmentsLayout;
