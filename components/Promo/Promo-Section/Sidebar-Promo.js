"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "venobox/dist/venobox.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";

const SidebarPromo = ({ checkMatchCourses }) => {
  const pathname = usePathname();
  const { cartToggle, setCart } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const isCourseDetailsPage = pathname.startsWith("/course-detail-2");

  // =====> Start ADD-To-Cart
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [amount, setAmount] = useState(1);

  const addToCartFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));
    setCart(!cartToggle);
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  // =====> For video PopUp
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isHide = currentScrollPos > 200;

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="content-item-content">
        <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
          <div className="rbt-price">
            <i class="ri-discount-percent-fill mr--5" style={{fontSize: "20px"}}></i>
            <span className="current-price fs-2">
              {checkMatchCourses.voucherCode}
            </span>
          </div>
          <div className="discount-time">
            <span className="rbt-badge color-danger bg-color-danger-opacity">
              <i className="feather-clock"></i> {checkMatchCourses.end_date_ago} days
              left!
            </span>
          </div>
        </div>

        <div className="mb--20 mt--20">
          <div className="d-flex mb--10">
            <div className="rbt-avater mr--10">
              <i class="ri-calendar-2-fill"></i>
              <span className="fs-4 ml--10">Periode:</span>
            </div>
            <div className="rbt-author-info">
              <span className="fs-4 fw-bold">
                {checkMatchCourses.startDate}
              </span>
              <span className="fs-4 fw-bold">
                {" "}
                - {checkMatchCourses.endDate}
              </span>
            </div>
          </div>
          {/* <div className="d-flex">
            <div className="rbt-avater mr--10">
              <i class="ri-discount-percent-fill"></i>
              <span className="fs-4 ml--10">Kode Promo:</span>
            </div>
            <div className="rbt-author-info">
              <span className="current-price fs-4 fw-bold">
                {checkMatchCourses.voucherCode}
              </span>
            </div>
          </div> */}
        </div>

        <div className="add-to-card-button mt--15">
          <Link
            className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
            href="#"
            onClick={() =>
              addToCartFun(checkMatchCourses.id, amount, checkMatchCourses)
            }
          >
            <span className="btn-text">Gunakan Sekarang</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </Link>
        </div>

        <div className="social-share-wrapper mt--30 text-center">
          <span className="subtitle">
            <i className="ri-share-fill"></i> Bagikan Promo Ini
          </span>
          <div className="rbt-post-share d-flex align-items-center justify-content-center">
            <ul className="social-icon social-default transparent-with-border justify-content-center">
              <li>
                <Link href="https://www.facebook.com/">
                  <i className="feather-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.twitter.com">
                  <i className="feather-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <i className="feather-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarPromo;
