"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Instagram from "@/components/Instagram/Instagram";
import PrivacyPolicy from "@/components/Privacy-Policy/PrivacyPolicy";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <PrivacyPolicy />

          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default PrivacyPolicyPage;
