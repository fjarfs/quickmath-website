import { useEffect } from "react";
import AboutSix from "./About-Six";
import sal from "sal.js";
import WhyUsMain from "./WhyUsMain";
import AboutThree from "./About-Three";
import TestimonialSix from "../Testimonials/Testimonial-Six";
import Link from "next/link";
import FaqTwo from "../Faqs/Faq-Two";

const TentangKamiPage = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap2">
        <div className="container">
          <AboutSix />
        </div>
      </div>

      {/* START WHY CHOOSE US */}
      <div className="rbt-counterup-area bg-color-extra2 rbt-section-gap2 mt--0">
        <WhyUsMain />
      </div>
      {/* END WHY CHOOSE US */}

      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap2">
        <div className="container">
          <AboutThree />
        </div>
      </div>

      <div className="rbt-testimonial-area bg-color-white rbt-section-gap2Bottom overflow-hidden">
        <div className="container-fluid">
          <div className="row g-5 align-items-center">
            <div className="col-xl-3">
              <div className="section-title pl--100 pl_md--30 pl_sm--0">
                <h2 className="title">Cerita Sukses Para Pelajar</h2>
                <p className="description mt--20">
                  Belajar efektif untuk semua jenjang, kuasai dunia, dan raih
                  masa depan gemilang bersama QuickMath.
                </p>
                <div className="veiw-more-btn mt--20">
                  <Link
                    className="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                    href="#"
                  >
                    <span data-text="Lihat Review">Lihat Review</span>
                  </Link>
                </div>
              </div>
            </div>
            <TestimonialSix />
          </div>
        </div>
      </div>

      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap2">
        <div className="container">
          <FaqTwo />
        </div>
      </div>
    </>
  );
};

export default TentangKamiPage;
