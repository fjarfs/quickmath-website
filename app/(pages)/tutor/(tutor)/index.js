"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import MobileMenu from "@/components/Header/MobileMenu";
import TutorAll from "@/components/Instructor/Tutor-All";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

const TutorAllLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <BreadCrumb title="Tutor Profesional & Berpengalaman" text="Semua Master Tutor" />

          <TutorAll isPagination={true} start={0} end={6}/>

          <Separator />
          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default TutorAllLayout;
