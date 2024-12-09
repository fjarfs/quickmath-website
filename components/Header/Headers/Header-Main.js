"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Search from "../Offcanvas/Search";
import NavMain from "../NavMain";

import logo from "/public/logo_hor.svg";
import logoLight from "/public/images/dark/logo/logo-light.png";
import { useAppContext } from "@/context/Context";

const HeaderMain = ({
  headerType,
  gapSpaceBetween,
  sticky,
  headerSticky,
  navigationEnd,
  container,
  btnClass,
  btnText,
  userType,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const { isLightTheme, mobile, setMobile } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky}  ${
          !headerType && isSticky ? `${headerSticky}` : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href="/">
                    {isLightTheme ? (
                      <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    ) : (
                      <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <NavMain />
            </div>

            <div className="header-right">
              <div className="rbt-button-group d-none d-xl-block">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse hover-transform-none"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">{btnText}</span>
                    <span className="btn-icon">
                      <i className="feather-edit-2"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-edit-3"></i>
                    </span>
                  </span>
                </Link>
                <Link className="rbt-btn btn-white hover-icon-reverse hover-transform-none" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Sign In</span>
                    <span className="btn-icon">
                      <i className="feather-log-in"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-log-in"></i>
                    </span>
                  </span>
                </Link>
              </div>

              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button
                    className="hamberger-button rbt-round-btn"
                    onClick={() => setMobile(!mobile)}
                  >
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Search />
      </div>
    </>
  );
};

export default HeaderMain;
