import BackToTop from "@/app/backToTop";
import MathSolverLayout from "./(math-solver)";

export const metadata = {
  title: "QuickMath - Math Solver",
  description: "Platform Bimbingan Belajar Online",
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
