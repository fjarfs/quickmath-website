"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import NavMainData from "../../data/landing-page/navMainData.json";

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
                          <div className="col-lg-3" key={innerIndex}>
                            <div className="mt--30 position-relative rbt-link-hover">
                              <Link href={value.link}>
                                <div className="inner rbt-link-hover d-flex text-start p-2">
                                  <div className="icons">
                                    <Image
                                      src={value.img}
                                      width={100}
                                      height={100}
                                      priority
                                      alt="Icons Images"
                                    />
                                  </div>
                                  <div className="content ml--10">
                                    <h5 className="mb--0 title theme-gradient">
                                      {value.title}
                                    </h5>
                                    <p className="description fs-5">
                                      {value.shortDesc}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        )
                      );
                      return elements;
                    }
                  })}
                {/* {NavMainData &&
                  NavMainData.navMainData.map((data, index) => {
                    if (data.menuType === "grid-item-3") {
                      const elements = data.menuItems?.map(
                        (value, innerIndex) => (
                          <div
                            className="col-lg-4 col-xl-2 col-xxl-2 col-md-4 col-sm-4 col-12 border border-black"
                            key={innerIndex}
                          >
                            <div className="mt--30 border border-black position-relative">
                              <div
                                className={`inner row border border-black ${
                                  value.badget ? "disable" : ""
                                }`}
                              >
                                <div className="col-5 border border-black">
                                  <Link href={value.link} className="relative">
                                    <Image
                                      src={value.img}
                                      width={60}
                                      height={60}
                                      alt="Demo Images"
                                    />
                                  </Link>
                                </div>
                                <div className="content text-center col-7 border border-black">
                                  <h6 className="title">
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
                                  </h6>
                                  <p>{value.shortDesc}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      );
                      return elements;
                    }
                    return null;
                  })} */}
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
export default NavMain;
