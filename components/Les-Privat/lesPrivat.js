import Instruktur from "../Team/Instruktur";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import FlowKonsultasi from "../Abouts/FlowKonsultasi";
import ContactUs from "../Contacts/ContactUs";
import LesPrivatBanner from "./lesPrivatBanner";
import LesPrivatePricing from "../Pricing/Plans/LesPrivatPricing";
import { useEffect } from "react";
import sal from "sal.js";
import AboutLesPrivat from "../Abouts/About-LesPrivat";

const LesPrivatComp = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-banner-area rbt-banner-1">
        <LesPrivatBanner />
      </div>

      <div className="rbt-about-area about-style-1 bg-transparent rbt-section-gap2">
        <div className="container">
          <AboutLesPrivat/>
        </div>
      </div>

      <div className="rbt-section-gap2bottom">
        <div className="section-title text-center mb--50">
          <span className="subtitle bg-pink-opacity">HARGA PAKET</span>
          <h2 className="title">Harga Fleksibel Sesuai Kebutuhan</h2>
        </div>
        <div className="container">
          <LesPrivatePricing/>
        </div>
      </div>

      <div className="rbt-callto-action-area rbt-section-gap2Top">
        <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75 ">
          <ContactUs btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
        </div>
      </div>

      <div className="rbt-section-gap2Top">
        <FlowKonsultasi />
      </div>

      <div className="rbt-section-gap2Top">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Instruktur Kami
                </span>
                <h2 className="title">Guru Inspirasi Anda</h2>
              </div>
            </div>
          </div>
          <Instruktur />
        </div>
      </div>

      <div className="rbt-section-gap2">
        <TestimonialFour />
      </div>
    </>
  );
};

export default LesPrivatComp;
