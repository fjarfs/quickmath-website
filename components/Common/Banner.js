import Link from "next/link";
import React from "react";

const Banner = ({ text, col, blogdata, breadCrumb }) => {
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className={col}>
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">{breadCrumb}</li>
                  </ul>

                  <div className=" title-wrapper">
                    <h1 className="title mb--0">{text}</h1>
                    <Link href="#" className="rbt-badge-2">
                      <div className="image">🎉</div>
                      {blogdata ? `${blogdata.length} Artikel` : "50 Artikel"}
                    </Link>
                  </div>

                  <p className="description">
                    Dapatkan informasi dan tips terbaru untuk mendukung
                    perjalanan belajar Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
