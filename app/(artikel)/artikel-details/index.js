"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Separator from "@/components/Common/Separator";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogListItems from "@/components/Blogs/Blog-Sections/BlogList-Items";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import FooterMain from "@/components/Footer/Footer-Main";

export default function SingleArtikel({ getArticleDetails }) {
  
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <div className="rbt-overlay-page-wrapper">
            <BlogBreadCrumb matchedBlog={getArticleDetails} />
            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <BlogDetails
                  matchedBlog={getArticleDetails !== undefined ? getArticleDetails : ""}
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
}
