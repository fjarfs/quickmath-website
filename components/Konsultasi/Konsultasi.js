import KonsultasiPricing from "../Pricing/Plans/KonsultasiPricing";
import Instruktur from "../Team/Instruktur";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import FlowKonsultasi from "../Abouts/FlowKonsultasi";
import KonsultasiBanner from "./KonsultasiBanner";
import ContactUs from "../Contacts/ContactUs";

const KonsultasiComp = () => {
  return (
    <>
      <div className="rbt-banner-area rbt-banner-8 variation-02 with-shape">
        <KonsultasiBanner />
      </div>

      <div className="rbt-section-gap2Top mt_dec--100 mt_md_dec--30 mt_sm_dec--30">
        <div className="section-title text-center mb--50">
          <span className="subtitle bg-pink-opacity">HARGA PAKET</span>
          <h2 className="title">Harga Fleksibel Sesuai Kebutuhan</h2>
        </div>
        <div className="container">
        <KonsultasiPricing />
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

export default KonsultasiComp;
