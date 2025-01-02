import BackToTop from "@/app/backToTop";
import MathSolverLayout from "./(math-solver)";

export const metadata = {
  title: "QuickMath - Math Solver",
  description: "Online Courses & Education NEXTJS14 Template",
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
