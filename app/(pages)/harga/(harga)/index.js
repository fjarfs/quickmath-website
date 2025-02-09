"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import MobileMenu from "@/components/Header/MobileMenu";
import PricingMain from "@/components/Pricing/Pricing-Main";
import TestimonialFour from "@/components/Testimonials/Testimonial-Four";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

const HargaPaketLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <BreadCrumb title="Harga" text="Harga" />

          <div className="rbt-pricing-area rbt-section-gap2">
            <PricingMain
              tag={"Harga"}
              title={"Harga Fleksibel, Sesuai Kebutuhan"}
            />
          </div>

          <div className="rbt-section-gap2">
            <TestimonialFour />
          </div>

          <Separator />
          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default HargaPaketLayout;
