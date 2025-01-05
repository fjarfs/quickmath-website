import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LesPrivatePricing = dynamic(() => import("./Plans/LesPrivatPricing"), { ssr: false });
const KonsultasiPricing = dynamic(() => import("./Plans/KonsultasiPricing"), { ssr: false });

const PricingMain = ({ title, tag }) => {
  const [pricing, setPricing] = useState({
    LesPrivat: false,
    Konsultasi: true,
  });

  const [isClient, setIsClient] = useState(false);

  // Pastikan komponen hanya dirender di sisi klien
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Jangan render apa pun di server
  }

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
                        })
                      }
                    >
                      Les Privat
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

      </div>
    </>
  );
};

export default PricingMain;
