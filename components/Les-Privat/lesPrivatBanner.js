"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import lesPrivatIcon from "../../public/images/feature/les_2.png"

const LesPrivatBanner = () => {
  return (
    <>
      <div className="container rbt-section-gap2">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-8">
            <div className="content">
              <div className="inner">
                <h1 className="title">
                  Mulai Belajar
                  <span className="color-primary"> Kapan & Di Mana </span>
                  Saja
                </h1>
                <p className="description">
                Bimbingan Belajar Online untuk Semua Jenjang, dari
                  <strong> SD hingga Kuliah!</strong>
                </p>
                <div className="slider-btn">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/download-apps"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Pesan Sekarang</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Image
              className="rounded-5"
              src={lesPrivatIcon}
              width={360}
              height={270}
              alt="Education Images"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LesPrivatBanner;
