"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import treeSvg from "../../public/images/icons/tree-shape.svg";
import { useMediaQuery } from "react-responsive";

const KonsultasiBanner = () => {
  useEffect(() => {
    const typeitInstance = new Typed(".is-visible", {
      strings: ["Matematika", "Fisika", "Kimia"],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: Infinity,
      showCursor: false,
    });

    return () => {
      typeitInstance.destroy();
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="content">
              <div className="inner text-center">
                <h1 className="title">
                  Bingung dengan Tugas <br/>
                  <span className="header-caption ms-2">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible theme-gradient"></b>
                      </span>
                    </span>
                  </span>
                  ?
                </h1>
                <p className="description has-medium-font-size mt--20">
                Konsultasi tugas, tanya jawab dan diskusi via chat dengan tutor terbaik sampai memahaminya
                </p>
                <div className="slider-btn rbt-button-group justify-content-center">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/download-apps"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Pesan</span>
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
        </div>
        <div className="shape-image">
          <Image src={treeSvg} width={912} height={513} alt="Shape" />
        </div>
      </div>
    </>
  );
};

export default KonsultasiBanner;
