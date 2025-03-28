import { useRouter } from "next/navigation";
import HeaderTopEight from "./Header-Top/HeaderTop-Eight";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderMain from "./Headers/Header-Main";
import DarkSwitch from "./dark-switch";
import { useAppContext } from "@/context/Context";

const HeaderStyleMain = ({ headerSticky }) => {
  const router = useRouter();
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />
      <header className="rbt-header rbt-header-10">
        <HeaderTopEight
            bgColor="bg-not-transparent bg-color-darker"
            gapSpaceBetween="header-space-betwween"
            container="container-fluid"
            flexDirection=""
            btnClass="rbt-switch-btn btn-gradient btn-xs"
            btnText="Call us now"
          />
        
        <HeaderMain
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
          btnClass="btn-gradient icon-hover"
          btnText="Daftar"
        />
      </header>
    </>
  );
};
export default HeaderStyleMain;
