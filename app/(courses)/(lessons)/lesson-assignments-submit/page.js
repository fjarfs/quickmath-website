import BackToTop from "@/app/backToTop";
import AssignmentsSubmitPage from "./(assignments-submit)";

export const metadata = {
  title: "Lesson Quiz Result - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const AssignmentsSubmitLayout = () => {
  return (
    <>
      <AssignmentsSubmitPage />
      <BackToTop />
    </>
  );
};

export default AssignmentsSubmitLayout;
