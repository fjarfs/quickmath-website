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
            className={`${activeMenuItem === "home" ? "active" : ""}`}
            href="/"
            onClick={() => toggleMenuItem("home")}
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
                            <div className="mt--10 position-relative rbt-link-hover">
                              <Link href={value.link}>
                                <div className="inner rbt-link-hover d-flex text-start">
                                  <div className="icons">
                                    <Image
                                      src={value.img}
                                      width={60}
                                      height={60}
                                      priority
                                      alt="Icons Images"
                                    />
                                  </div>
                                  <div className="content ml--10">
                                    <h5 className="m-0 title theme-gradient">
                                      {value.title}
                                    </h5>
                                    <p className="fs-5">
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

        {/* HARGA */}
        <li className="position-static">
          <Link
            href="/harga"
            className={`${activeMenuItem === "pricing" ? "open" : ""}`}
          >
            Harga
          </Link>
        </li>

        {/* TESTIMONNI */}
        <li className="position-static">
          <Link
            href="/testimoni"
            className={`${activeMenuItem === "testimoni" ? "open" : ""}`}
          >
            Testimoni
          </Link>
        </li>

        {/* TENTANG KAMI */}
        <li className="position-static">
          <Link
            href="/tentang-kami"
            className={`${activeMenuItem === "tentang-kami" ? "open" : ""}`}
          >
            Tentang Kami
          </Link>
        </li>

        {/* ARTIKEL */}
        <li className="position-static">
          <Link
            href="/artikel"
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
