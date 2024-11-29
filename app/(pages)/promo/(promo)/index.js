"use client"

import Separator from "@/components/Common/Separator";
import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import MobileMenu from "@/components/Header/MobileMenu";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";


const PromoLayout = () => {
    return (
        <>
            <Provider store={Store}>
                <Context>
                    <MobileMenu/>
                    <HeaderStyleMain headerSticky="rbt-sticky" headerType=""/>

                    <Separator/>
                    <FooterMain/>
                </Context>
            </Provider>
        </>
    )
}

export default PromoLayout;