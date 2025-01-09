"use client";

import { useEffect } from "react";
import sal from "sal.js";
import { Provider } from "react-redux";

import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Banner from "@/components/Common/Banner";
import BlogGrid from "@/components/Blogs/BlogGrid";
import Separator from "@/components/Common/Separator";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";

const ArtikelAllPage = ({ getAllBlogs }) => {
  const allArticles = getAllBlogs.data;

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Banner col="col-lg-12" text="Artikel untuk Inspirasi Anda" breadCrumb="Semua Artikel" blogdata={getAllBlogs} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogGrid
                isPagination={true}
                blogdata={allArticles}
                top={true}
              />
            </div>
          </div>

          <Separator />
          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default ArtikelAllPage;
