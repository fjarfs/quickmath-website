"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import education1 from "../../public/images/feature/les_2.png";

const LesPrivatBanner = () => {
  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one">
                  Mulai Belajar
                  <span>Kapan &amp; </span>
                  <span>Di mana Saja</span>.
                </h1>
                <p className="description">
                Bimbingan Belajar Online untuk Semua Jenjang, dari SD hingga Kuliah!
                </p>
                <div className="rbt-button-group">
                  <Link
                    className="rbt-btn btn-white hover-icon-reverse"
                    href="#"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Pesan Sekarang</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                  <Link
                    className="rbt-btn btn-border hover-icon-reverse color-white"
                    href="/contact"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Hubungi Kami</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default LesPrivatBanner;
