"use client";

import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import ComingSoonComp from "@/components/Coming-Soon/ComingSoon";
import BreadCrumb from "@/components/Common/BreadCrumb";
import ComingSoonData from "/data/elements/comingSoon.json";


const BankMateriLayout = () => {
    const AboutData = ComingSoonData.bank_materi
    const OurAppsData = ComingSoonData.our_apps
    return (
        <>
            <Provider store={Store}>
                <Context>
                    <MobileMenu/>
                    <HeaderStyleMain headerSticky="rbt-sticky" headerType=""/>
                    <BreadCrumb title="Bank Materi" text="Bank Materi"/>

                    <ComingSoonComp AboutData={AboutData} OurAppsData={OurAppsData}/>

                    <Separator/>
                    <FooterMain/>
                </Context>
            </Provider>
        </>
    )
}

export default BankMateriLayout;