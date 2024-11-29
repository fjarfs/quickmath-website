"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import education1 from "../../public/images/feature/les_2.png";

const LesPrivatBanner = () => {
  return (
    <>
      <div className="container-fluid px-5 pb--50 px-md-4">
        <div className="row pb--120 pt--20">
          <div className="col-md-12 space-responsive-xxl">
            <div className="content row">
              <div className="inner col-md-7">
                <h1 className="title">
                  Belajar
                  <span className="theme-gradient">
                    {" "}
                    Kapan Saja dan Di Mana Saja{" "}
                  </span>
                  Untuk Semua Tingkatan
                </h1>
                <div className="more-author-text">
                  <h5 className="total-join-students">
                    Bimbingan Belajar Online untuk Semua Jenjang, dari SD hingga
                    Kuliah
                  </h5>
                </div>
              </div>
              <div className="shape-wrapper col-md-4" id="scene">
                <Image
                  className="rounded-5"
                  src={education1}
                  width={400}
                  height={300}
                  alt="Education Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LesPrivatBanner;
