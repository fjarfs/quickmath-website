import Link from "next/link";
import React, { useState } from "react";
import LesPrivate from "./Plans/LesPrivatPricing";
import LesPrivatePricing from "./Plans/LesPrivatPricing";
import KonsultasiPricing from "./Plans/KonsultasiPricing";

const PricingMain = ({ title, tag }) => {
  const [pricing, setPricing] = useState({
    LesPrivat: false,
    Konsultasi: true,
    Materi: false,
  });

  return (
    <>
      <div className="container">
        {title ? (
          <div className="row g-5 mb--60">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="section-title text-start">
                <span className="subtitle bg-pink-opacity">{tag}</span>
                <h2 className="title">{title}</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="pricing-billing-duration text-center text-md-end">
                <ul>
                  <li className="nav-item">
                    <button
                      className={`nav-link monthly-plan-btn ${
                        pricing.Konsultasi ? "active" : ""
                      }`}
                      type="button"
                      onClick={() =>
                        setPricing({
                          LesPrivat: false,
                          Konsultasi: true,
                          Materi: false,
                        })
                      }
                    >
                      Konsultasi
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link yearly-plan-btn ${
                        pricing.LesPrivat ? "active" : ""
                      }`}
                      type="button"
                      onClick={() =>
                        setPricing({
                          LesPrivat: true,
                          Konsultasi: false,
                          Materi: false,
                        })
                      }
                    >
                      Les Privat
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link daily-plan-btn ${
                        pricing.Materi ? "active" : ""
                      }`}
                      type="button"
                      onClick={() =>
                        setPricing({
                          LesPrivat: false,
                          Konsultasi: false,
                          Materi: true,
                        })
                      }
                    >
                      Materi
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* KONSULTASI PRICING */}
        {pricing.Konsultasi && <KonsultasiPricing />}

        {/* LES PRIVATE */}
        {pricing.LesPrivat && <LesPrivatePricing />}

        {/* Materi PRICING */}
        {pricing.Materi && <KonsultasiPricing />}

      </div>
    </>
  );
};

export default PricingMain;
