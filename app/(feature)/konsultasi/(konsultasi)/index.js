"use client";

import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";
import KonsultasiComp from "@/components/Konsultasi/Konsultasi";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";


const KonsultasiLayout = () => {
    return (
        <>
            <Provider store={Store}>
                <Context>
                    <MobileMenu/>
                    <HeaderStyleMain headerSticky="rbt-sticky" headerType=""/>
                    <KonsultasiComp/>

                    <Separator/>
                    <FooterMain/>
                </Context>
            </Provider>
        </>
    )
}

export default KonsultasiLayout;