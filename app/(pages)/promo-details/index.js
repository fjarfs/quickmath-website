"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import sal from "sal.js";
import PromoListData from "../../../data/landing-page/promoList.json"
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseDetailsOne from "@/components/Course-Details/CourseDetails-One";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";
import PromoDetails from "@/components/Promo/PromoDetails";

const SinglePromo = ({ getParams }) => {
  const router = useRouter();
  const postId = parseInt(getParams.promoId);
  let getPromo;

  getPromo = JSON.parse(JSON.stringify(PromoListData.promoList));

  const checkMatch = getPromo.find((promo) => promo.id === postId);

  useEffect(() => {
    if (!checkMatch && postId) {
      router.push("/course-filter-one-toggle");
    }

    sal({
      threshold: 0.01,
      once: true,
    });
  }, [checkMatch, router]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="" headerType={true} />
          <Cart />

          

          {/* <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            <CourseHead
              checkMatch={checkMatch !== undefined ? checkMatch : ""}
            />
          </div> */}

          <div className="rbt-course-details-area ptb--60">
            <div className="container">
              <div className="row g-5">
                <PromoDetails
                  checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
                />
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

export default SinglePromo;
