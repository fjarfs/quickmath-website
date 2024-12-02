"use client";

import React from "react";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import Separator from "@/components/Common/Separator";

import MainPage from "@/components/00-landing-page/00-landing-page";
import FooterMain from "@/components/Footer/Footer-Main";

const LandingPageLayout = ({ getBlog, data, error }) => {
  const dataPromo = data.props.dataPromo

  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
        <MainPage blogs={getBlog} promo={dataPromo}/>

        <Separator />
        <FooterMain />
      </Context>
    </Provider>
  );
};

export default LandingPageLayout;
