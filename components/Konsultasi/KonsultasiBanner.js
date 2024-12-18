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

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="content">
              <div className="inner text-center">
                {isMobile ? (
                  <h2>
                  Bingung dengan Tugas?
                  <br /> Konsultasikan Langsung dengan <br /> Tutor Ahli Kami!
                </h2>
                ) : (
                  <h2>
                  Bingung dengan Tugas
                  <span className="header-caption ms-2">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible text-white"></b>
                      </span>
                    </span>
                  </span>
                  ? <br /> Konsultasikan Langsung dengan <br /> Tutor Ahli Kami!
                </h2>
                )}
                <p className="description has-medium-font-size mt--20 text-white">
                  Konsultasi personal kapan saja, di mana saja!
                </p>

                <Link className="rbt-btn btn-white hover-icon-reverse" href="#konsultasi-pricing">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KonsultasiBanner;
