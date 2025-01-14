"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import NavMainData from "../../data/landing-page/navMainData.json";

const NavMain = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const pathname = usePathname();

  const isActive = (menuItem) => {
    // Periksa apakah menu saat ini cocok dengan URL
    if (menuItem === "home") {
      return pathname === "/"; // Aktifkan jika di halaman beranda
    }
    return pathname.startsWith(`/${menuItem}`); // Aktifkan untuk sub-menu
  };

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        {/* HOME */}
        <li className="position-static">
          <Link
            className={`${
              isActive("home") || activeMenuItem === "home" ? "active" : ""
            }`}
            onClick={() => toggleMenuItem("home")}
            href="/"
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
              isActive("layanan") || activeMenuItem === "layanan" ? "active" : ""
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
                                <div className="inner d-flex text-start p-2">
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
                                    <h5 className="mb--0 title">
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
              </div>
            </div>
          </div>
        </li>

        {/* PROMO */}
        <li className="position-static">
          <Link
            className={`${
              isActive("promo") || activeMenuItem === "promo" ? "active" : ""
            }`}
            onClick={() => toggleMenuItem("promo")}
            href="/promo"
          >
            Promo
          </Link>
        </li>

        {/* TENTANG KAMI */}
        <li className="position-static">
          <Link
            href="/about-us"
            className={`${
              isActive("about-us") || activeMenuItem === "about-us"
                ? "active"
                : ""
            }`}
            onClick={() => toggleMenuItem("about-us")}
          >
            Tentang Kami
          </Link>
        </li>

        {/* Testimoni */}
        <li className="position-static">
          <Link
            href="/testimoni"
            className={`${
              isActive("testimoni") || activeMenuItem === "testimoni"
                ? "active"
                : ""
            }`}
            onClick={() => toggleMenuItem("testimoni")}
          >
            Testimoni
          </Link>
        </li>

        {/* HARGA PAKET */}
        <li className="position-static">
          <Link
            href="/harga-paket"
            className={`${
              isActive("harga-paket") || activeMenuItem === "harga-paket"
                ? "active"
                : ""
            }`}
            onClick={() => toggleMenuItem("harga-paket")}
          >
            Harga Paket
          </Link>
        </li>

        {/* ARTIKEL */}
        <li className="position-static">
          <Link
            href="/artikel-all"
            className={`${
              isActive("artikel-all") || activeMenuItem === "artikel-all"
                ? "active"
                : ""
            }`}
            onClick={() => toggleMenuItem("artikel-all")}
          >
            Artikel
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMain;
