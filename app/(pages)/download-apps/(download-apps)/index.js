"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";
import ComingSoonData from "/data/elements/comingSoon.json";
import ComingSoonComp from "@/components/Coming-Soon/ComingSoon";
import OurApps from "@/components/Our-Apps/OurApps";


const DownloadAppsLayout = () => {
  const OurAppsData = ComingSoonData.our_apps;

  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />

          <OurApps OurAppsData={OurAppsData} start={2} end={3}/>

          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default DownloadAppsLayout;
