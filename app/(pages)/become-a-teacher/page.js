import BackToTop from "@/app/backToTop";
import TeacherPage from "./(become-a-teacher)";

export const metadata = {
  title: "Become a Teacher - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};
const TeacherLayout = () => {
  return (
    <>
      <TeacherPage />

      <BackToTop />
    </>
  );
};

export default TeacherLayout;
