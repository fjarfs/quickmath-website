"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import NavMainData from "../../data/landing-page/navMainData.json";

const NavMobile = () => {
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
        <li className="position-static">
          <Link
            className={`${activeMenuItem === "home" ? "open" : ""}`}
            href="/landing-page"
          >
            Home
          </Link>
        </li>

        {/* LAYANAN */}
        <li className="with-megamenu has-menu-child-item position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "layanan" ? "open" : ""}`}
            onClick={() => toggleMenuItem("layanan")}
          >
            Layanan
            <i className="feather-chevron-down"></i>
          </Link>
          <div
            className={`rbt-megamenu ${
              activeMenuItem === "layanan" ? "active d-block" : ""
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
                                className={`inner d-flex align-items-center ${
                                  value.badget ? "disable" : ""
                                }`}
                              >
                                <div className="mr--20">
                                  <Link href={value.link} className="relative">
                                    <Image
                                      src={value.img}
                                      width={50}
                                      height={50}
                                      alt="Demo Images"
                                    />
                                  </Link>
                                </div>
                                <div className="content text-start">
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
        <li className="position-static">
          <Link
            className={`${activeMenuItem === "promo" ? "open" : ""}`}
            href="/promo"
          >
            Promo
          </Link>
        </li>

        {/* TENTANG KAMI */}
        <li className="position-static">
          <Link
            href="/about-us"
            className={`${activeMenuItem === "aboutUs" ? "open" : ""}`}
          >
            Tentang Kami
          </Link>
        </li>

        {/* HARGA PAKET */}
        <li className="position-static">
          <Link
            href="/harga-paket"
            className={`${activeMenuItem === "pricing" ? "open" : ""}`}
          >
            Harga Paket
          </Link>
        </li>

        {/* ARTIKEL */}
        <li className="position-static">
          <Link
            href="#"
            className={`${activeMenuItem === "artikel" ? "open" : ""}`}
          >
            Artikel
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMobile;
