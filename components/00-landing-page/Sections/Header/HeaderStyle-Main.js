import { useRouter } from "next/navigation";
import HeaderTopEight from "../../../Header/Header-Top/HeaderTop-Eight";
import HeaderTopBar from "../../../Header/HeaderTopBar/HeaderTopBar";
import HeaderMain from "./Header-Main";
import DarkSwitch from "../../../Header/dark-switch";
import { useAppContext } from "@/context/Context";

const HeaderStyleMain = ({ headerSticky }) => {
  const router = useRouter();
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-10">
        {router.pathname === "/landing-page" && "/landing-page" ? (
          <HeaderTopBar />
        ) : (
          <HeaderTopEight
            bgColor="bg-not-transparent bg-color-darker"
            gapSpaceBetween="header-space-betwween"
            container="container-fluid"
            flexDirection=""
            btnClass="rbt-switch-btn btn-gradient btn-xs"
            btnText="Call us now"
          />
        )}
        <HeaderMain
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
          btnClass="btn-gradient icon-hover"
          btnText="Sign Up"
        />
      </header>
    </>
  );
};
export default HeaderStyleMain;
