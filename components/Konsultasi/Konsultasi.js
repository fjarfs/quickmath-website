import KonsultasiPricing from "../Pricing/Plans/KonsultasiPricing";
import Instruktur from "../Team/Instruktur";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import FlowKonsultasi from "../Abouts/FlowKonsultasi";
import KonsultasiBanner from "./KonsultasiBanner";
import ContactUs from "../Contacts/ContactUs";
import AboutKonsultasi from "../Abouts/About-Konsultasi";
import { useEffect } from "react";
import sal from "sal.js";
import Link from "next/link";

const KonsultasiComp = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-banner-area rbt-banner-8 variation-02 with-shape">
        <KonsultasiBanner />
      </div>

      <div className="rbt-about-area about-style-1 bg-transparent rbt-section-gap2Bottom mt_dec--100 mt_md_dec--30 mt_sm_dec--30">
        <div className="container">
          <AboutKonsultasi />
        </div>
      </div>

      <div className="rbt-section-gap2Top">
        <FlowKonsultasi />
      </div>

      <div className="rbt-section-gap2Bottom" id="konsultasi-pricing">
        <div className="section-title text-center mb--10">
          <span className="subtitle bg-pink-opacity">HARGA</span>
          <h2 className="title">Harga Fleksibel Sesuai Kebutuhan</h2>
        </div>
        <div className="container-fluid">
        <KonsultasiPricing />
        </div>
      </div>

      <div className="rbt-callto-action-area rbt-section-gap2Top">
        <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75 ">
          <ContactUs btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
        </div>
      </div>

      <div className="rbt-section-gap2Top">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Master Tutor Kami
                </span>
                <h2 className="title">Tutor Inspirasi Kamu</h2>
              </div>
            </div>
          </div>
          <Instruktur />
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--50 text-center">
                <Link
                  className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                  href="/tutor-all"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Lihat Semua Tutor</span>
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

      <div className="rbt-section-gap2">
        <TestimonialFour start={0} end={3}/>
      </div>
    </>
  );
};

export default KonsultasiComp;
