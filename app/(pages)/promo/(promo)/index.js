"use client";

import CourseDetails from "../../../../data/course-details/courseData.json";
import PromoData from "../../../../data/landing-page/promoList.json"

import PromoHead from "@/components/Category/PromoHead";
import Separator from "@/components/Common/Separator";
import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import MobileMenu from "@/components/Header/MobileMenu";
import PromoListAll from "@/components/Promo/Promo";
import Context from "@/context/Context";
import Store from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

const PromoLayout = () => {
  let getAllPromo = JSON.parse(
    JSON.stringify(PromoData.promoList.slice(0, 12))
  );
  const [promoFilter, setPromoFilter] = useState(getAllPromo);

  const filterItem = (types) => {
    const updateItem = getAllPromo.filter((curElm) => {
      return curElm.promoType === types;
    });

    if (types !== "Semua Promo") {
      setPromoFilter(updateItem);
    } else {
      setPromoFilter(getAllPromo);
    }
  };
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />

          <PromoHead
            promoFilter={promoFilter}
            setPromoFilter={setPromoFilter}
            filterItem={filterItem}
            category={getAllPromo}
          />

          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <PromoListAll promo={promoFilter} />
              </div>
            </div>
          </div>

          <Separator />
          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default PromoLayout;
