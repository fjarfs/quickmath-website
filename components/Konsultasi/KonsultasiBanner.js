"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import treeSvg from "../../public/images/icons/tree-shape.svg";

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
                <h2>
                  Bingung dengan Tugas
                  <span className="header-caption ms-2">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible theme-gradient"></b>
                      </span>
                    </span>
                  </span>
                  ? <br/> Konsultasikan Langsung dengan <br/> Tutor Ahli Kami!
                </h2>
                <p className="description has-medium-font-size mt--20">
                Dapatkan bantuan profesional untuk menyelesaikan tugas sekolah atau kuliah dengan mudah. Konsultasi personal kapan saja, di mana saja!
                </p>
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
