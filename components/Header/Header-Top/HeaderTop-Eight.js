"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderTopData from "../../../data/headerTop";
import { useAppContext } from "@/context/Context";

const HeaderTopEight = ({
  bgColor,
  gapSpaceBetween,
  container,
  flexDirection,
}) => {
  const router = useRouter();
  const { toggle, setToggle } = useAppContext();
  const [device, setDevice] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent
    console.log('userAgent: ' + userAgent)
    const isAndroid = /android/i.test(userAgent);
    if (/android/i.test(userAgent)) {
      setDevice("Android");
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setDevice("IOS");
    } else {
      setDevice("Desktop");
    }
  }, []);

  return (
  <>
    <div
      className={`rbt-header-top rbt-header-top-1 ${gapSpaceBetween} ${bgColor} top-expended-activation ${
        !toggle ? "d-none" : ""
      }`}
    >
      <div className={`${container}`}>
        <div className="top-expended-wrapper">
          {HeaderTopData &&
            HeaderTopData.headerTopOne.map((item, index) => (
              <div
                className={`top-expended-inner rbt-header-sec align-items-center ${flexDirection}`}
                key={index}
              >
                <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                  <div className="rbt-header-content">
                    <div className="header-info">
                      <ul className="rbt-information-list">
                        <li>
                          <Link href="https://www.instagram.com/quickmath.id?from=lp" target="_blank">
                            <i className="fab fa-instagram"></i>
                            {item.insFollowers}k
                            <span className="d-none d-xxl-block">
                              {item.type}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.tiktok.com/@quickmath.id" target="_blank">
                            <i className="ri-tiktok-line"></i>
                            {item.fbFollowers}k
                            <span className="d-none d-xxl-block">
                              {item.type}
                            </span>
                          </Link>
                        </li>
                        <li>
                            <Link href="https://wa.me/6282133599318">
                              <i className="feather-phone"></i>
                              {item.phone}
                            </Link>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rbt-header-sec-col rbt-header-center">
                  <div className="rbt-header-content justify-content-start justify-content-xl-center">
                    <div className="header-info">
                      <div className="rbt-header-top-news">
                        <div className="inner">
                          <div className="content">
                              <Link href={device == 'IOS' ? item.iosLink : item.androidLink} target="_blank">
                              <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">
                                {item.badgeText}
                                </span>
                              </Link>
                            <span className="news-text">
                              <Image
                                style={{color: 'red'}}
                                src={item.img}
                                width={50}
                                height={50}
                                alt=" Images"
                              />
                              {item.introPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                  <div className="rbt-header-content justify-content-start justify-content-lg-end">
                    
                  <div className="header-info d-none d-xl-block">
                        <ul className="social-share-transparent">
                          <li>
                            <Link href="https://wa.me/6282133599318" target="_blank">
                              <i className="ri-whatsapp-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/quickmath.id?from=lp" target="_blank">
                              <i className="feather-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.tiktok.com/@quickmath.id" target="_blank">
                              <i className="ri-tiktok-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://web.facebook.com/profile.php?id=100090682086511&_rdc=1&_rdr&from=lp" target="_blank">
                              <i className="feather-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://x.com/quickmath_id?from=lp" target="_blank">
                              <i className="ri-twitter-x-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.youtube.com/@quickmath_id?from=lp" target="_blank">
                              <i className="ri-youtube-line"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="header-info">
            <div className="top-bar-expended d-block d-lg-none">
              <button
                className="topbar-expend-button rbt-round-btn"
                onClick={() => setToggle(!toggle)}
              >
                <i className="feather-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default HeaderTopEight;
