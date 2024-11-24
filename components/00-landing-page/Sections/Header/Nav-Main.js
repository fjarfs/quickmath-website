"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import NavMainData from "../../../../data/landing-page/navMainData.json";

import CourseLayout from "../../../Header/NavProps/CourseLayout";
import PageLayout from "../../../Header/NavProps/PageLayout";
import ElementsLayout from "../../../Header/NavProps/ElementsLayout";

import addImage from "../../../../public/images/service/mobile-cat.jpg";

const NavMain = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        {/* HOME */}
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            className={`${activeMenuItem === "home" ? "open" : ""}`}
            onClick={() => toggleMenuItem("home")}
            href="/landing-page"
          >
            Home
          </Link>
        </li>

        {/* LAYANAN */}
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "elements" ? "open" : ""}`}
            onClick={() => toggleMenuItem("elements")}
          >
            Layanan
            <i className="feather-chevron-down"></i>
          </Link>
          <div
            className={`rbt-megamenu ${
              activeMenuItem === "home" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                {NavMainData &&
                  NavMainData.navMainData.map((data, index) => {
                    if (data.menuType === "grid-item-3") {
                      const elements = data.menuItems?.map(
                        (value, innerIndex) => (
                          <div
                            className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item"
                            key={innerIndex}
                          >
                            <div className="demo-single">
                              <div
                                className={`inner ${
                                  value.badget ? "disable" : ""
                                }`}
                              >
                                <div className="">
                                  <Link href={value.link} className="relative">
                                    <Image
                                      src={value.img}
                                      width={100}
                                      height={100}
                                      alt="Demo Images"
                                    />
                                    {value.badget ? (
                                      <span className="rbt-badge-card rbt-badge-card__coming">
                                        Coming Soon
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </Link>
                                </div>
                                <div className="content text-center">
                                  <h2 className="title">
                                    <Link className="theme-gradient" href={value.link}>
                                      {value.title}
                                      {value.badgeText ? (
                                        <span className="rbt-badge-card ms-3 d-lg-none">
                                          Coming
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </Link>
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      );
                      return elements;
                    }
                    return null;
                  })}
              </div>
            </div>
          </div>
        </li>

        {/* PROMO */}
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={`${activeMenuItem === "dashboard" ? "open" : ""}`}
            href=""
            onClick={() => toggleMenuItem("dashboard")}
          >
            Promo
          </Link>
        </li>

        {/* TENTANG KAMI */}
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "pages" ? "open" : ""}`}
            onClick={() => toggleMenuItem("pages")}
          >
            Tentang Kami
          </Link>
        </li>

        {/* HARGA PAKET */}
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "elements" ? "open" : ""}`}
            onClick={() => toggleMenuItem("elements")}
          >
            Harga Paket
          </Link>
        </li>

        {/* ARTIKEL */}
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "blog" ? "open" : ""}`}
            onClick={() => toggleMenuItem("blog")}
          >
            Artikel
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMain;
