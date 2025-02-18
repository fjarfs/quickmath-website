"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import sal from "sal.js";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Separator from "@/components/Common/Separator";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";

const SingleArtikel = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      console.log('xxx')
      router.push("/404");
    }

    sal({
      threshold: 0.01,
      once: true,
    });
  }, [data, router]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <div className="rbt-overlay-page-wrapper">
            <BlogBreadCrumb data={data} />
            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <BlogDetails
                  data={data !== undefined ? data : ""}
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

export default SingleArtikel;