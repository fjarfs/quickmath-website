import KonsultasiPricing from "../00-landing-page/Sections/Pricing/KonsultasiPricing";
import Instruktur from "../Team/Instruktur";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import ContactUsKonsultasi from "./Contact-Us/ContactUsKonsultasi";
import FlowKonsultasi from "./Flow/FlowKonsultasi";
import KonsultasiBanner from "./KonsultasiBanner";

const KonsultasiComp = () => {
  return (
    <>
      <div className="rbt-banner-area rbt-banner-8 variation-02 with-shape">
        <KonsultasiBanner />
      </div>

      <div className="rbt-section-gap2Bottom mt_dec--100 mt_md_dec--30 mt_sm_dec--30">
        <div className="section-title text-center mb--50">
          <span className="subtitle bg-pink-opacity">HARGA PAKET</span>
          <h2 className="title">Harga Fleksibel Sesuai Kebutuhan</h2>
        </div>
        <KonsultasiPricing />
      </div>

      <div className="rbt-newsletter-area bg-gradient-6 ptb--50 rbt-section-rbt-section-gap2">
        <ContactUsKonsultasi />
      </div>

      <div className="rbt-section-gap2">
        <FlowKonsultasi />
      </div>

      <div className="rbt-section-gap2">
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

        <div className="rbt-section-gap2">
          <TestimonialFour/>
        </div>
      </div>
    </>
  );
};

export default KonsultasiComp;
