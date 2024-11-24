"use client";

import React from "react";
import HeaderStyleMain from "@/components/00-landing-page/Sections/Header/HeaderStyle-Main";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";

import MainPage from "@/components/00-landing-page/00-landing-page";
import FooterMain from "@/components/00-landing-page/Sections/Footer/Footer-Main";

const LandingPageLayout = ({ getBlog }) => {
  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
        <MainPage blogs={getBlog}/>

        <Separator />
        <FooterMain />
      </Context>
    </Provider>
  );
};

export default LandingPageLayout;
