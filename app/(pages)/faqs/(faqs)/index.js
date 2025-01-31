"use client";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import Faq from "@/components/Faqs/Faq";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";

const FaqsPage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Bantuan" text="Bantuan" />

          <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
            <Faq />
          </div>

          <Separator />
          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default FaqsPage;
