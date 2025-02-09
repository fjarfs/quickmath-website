import BackToTop from "@/app/backToTop";
import LoginPage from "./(login)";

export const metadata = {
  title: "Login & Register - Platform Bimbingan Belajar Online",
  description: "Platform Bimbingan Belajar Online",
};

const LoginLayout = () => {
  return (
    <>
      <LoginPage />
      <BackToTop />
    </>
  );
};

export default LoginLayout;
