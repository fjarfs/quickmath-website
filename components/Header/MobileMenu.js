"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo_hor.svg";

import Nav from "./Nav";
import { useAppContext } from "@/context/Context";
import NavMain from "./NavMain";
import NavMobile from "./NavMobile";

const MobileMenu = () => {
  const { mobile, setMobile } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={175}
                    height={45}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">
              Platform pembelajaran online untuk semua jenjang pendidikan
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link href="mailto:admin@quickmath.id">
                  <i className="feather-mail"></i>admin@quickmath.id
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/6282133599318">
                  <i className="feather-phone"></i>082133599318
                </Link>
              </li>
            </ul>
          </div>

          <NavMobile />

          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="/download-apps"
              >
                <span>Masuk</span>
              </Link>
            </div>
            <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="/download-apps"
              >
                <span>Daftar Sekarang</span>
              </Link>
            </div>

            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Temukan Kami</span>
              <ul className="social-icon social-default transparent-with-border justify-content-center mt--20">
                <li>
                  <Link href="https://wa.me/6282133599318">
                    <i className="ri-whatsapp-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/quickmath.id?from=lp">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@quickmath.id">
                    <i className="ri-tiktok-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://web.facebook.com/profile.php?id=100090682086511&_rdc=1&_rdr&from=lp">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/quickmath_id?from=lp">
                    <i className="ri-twitter-x-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@quickmath_id?from=lp">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
