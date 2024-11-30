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
import useSWR from "swr";
import { api } from "@/utils/api";

// fetch data
const fetcher = (url) => fetch(url).then((res) => res.json());

const LandingPageLayout = ({ getBlog, getPromo }) => {
  const { data: promo } = useSWR(api('/promo'), fetcher);

  if (!promo) return <div>Loading...</div>

  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
        <MainPage blogs={getBlog} promo={promo}/>

        <Separator />
        <FooterMain />
      </Context>
    </Provider>
  );
};

export default LandingPageLayout;
