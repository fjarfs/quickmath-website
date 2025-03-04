import BackToTop from "@/app/backToTop";
import MathSolverLayout from "./(math-solver)";

export const metadata = {
  title: "QuickMath - Math Solver",
  description: "Platform Bimbingan Belajar Online untuk jenjang SD, SMP, SMA dan Kuliah",
};

const MathSolverPage = () => {
  return (
    <>
      <MathSolverLayout />
      <BackToTop />
    </>
  );
};

export default MathSolverPage;
