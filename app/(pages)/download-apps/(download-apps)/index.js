"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";
import DownloadApps from "@/components/Our-Apps/DownloadApps";

const DownloadAppsPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />

          <DownloadApps/>

          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default DownloadAppsPage;
