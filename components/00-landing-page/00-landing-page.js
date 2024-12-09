"use client";

import { useEffect } from "react";
import sal from "sal.js";
import Link from "next/link";

// Data

// Components
import MainHomeBanner from "./MainHomeBanner";
import FeatureList from "../Category/FeatureList";
import PromoList from "../Category/PromoList";
import WhyUsMain from "../Abouts/WhyUsMain";
import PricingMain from "../Pricing/Pricing-Main";
import TestimonialSix from "../Testimonials/Testimonial-Six";
import Instruktur from "../Team/Instruktur";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import ContactUs from "../Contacts/ContactUs";
import OurApps from "../Our-Apps/OurApps";

// img
import shapeImg from "../../public/images/icons/three-shape.png";
import Image from "next/image";

const MainPage = ({ blogs, promo }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <main className="rbt-main-wrapper">
        {/* START BANNER */}
        <div className="rbt-banner-area rbt-banner-1">
          <MainHomeBanner />
        </div>
        {/* END BANNER */}

        {/* START FEATURE LIST */}
        <div className="rbt-categories-area bg-color-white rbt-section-gap2Bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    LAYANAN KAMI
                  </span>
                  <h2 className="title">
                    Jelajahi Layanan Terbaik
                    <br /> yang Membantu Anda Meraih Prestasi
                  </h2>
                </div>
              </div>
            </div>

            <div className="row g-5 mt--20 justify-content-center">
              <FeatureList />
            </div>
          </div>
        </div>
        {/* END FEATURE LIST */}

        {/* START PROMO SECTION */}
        <div className="rbt-promo-area rbt-section-gapBottom bg-color-extra2">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-pink-opacity">Promo</span>
                  <h4 className="title">Promo Saat Ini</h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/promo"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Lihat Semua Promo</span>
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

            <div className="row row--15 justify-content-center">
              <PromoList PromoListData={promo} />
            </div>
          </div>
        </div>
        {/* END PROMO SECTION */}

        {/* START TOP MATERI */}
        {/* <div className="rbt-course-area rbt-section-gap2 mb--0">
          <div className="container">
            <div className="row mb--10">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title">
                    Histudy Course student <br /> can join with us.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row row--15">
              <Card
                col="col-lg-4 col-md-6 col-sm-6 col-12"
                mt="mt--30"
                start={0}
                end={3}
                isDesc={true}
                isUser={true}
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--50 text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Course (40)</span>
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
        </div> */}
        {/* END TOP MATERI */}

        {/* START WHY CHOOSE US */}
        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gap2Bottom mt--0">
          <WhyUsMain />
        </div>
        {/* END WHY CHOOSE US */}

        {/* START PRICING */}
        <div className="rbt-pricing-area bg-color-light rbt-section-gap">
          <PricingMain
            tag={"Harga Paket"}
            title={"Harga Fleksibel, Sesuai Kebutuhan"}
          />
        </div>
        {/* END PRICING */}

        {/* START TESTIMONIAL */}
        <div className="rbt-testimonial-area bg-color-white rbt-section-gap2 overflow-hidden">
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
        {/* END TESTIMONIAL */}

        {/* START TEACHER / INSTRUKTUR */}
        {/* <div className="rbt-team-area bg-color-white rbt-section-gap2Bottom">
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
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--50 text-center">
                <Link
                  className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Lihat Instruktur Lain</span>
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
        </div> */}
        <div className="rbt-section-gap2">
          <div className="container">
            <div className="row mb--30">
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
            <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--50 text-center">
                <Link
                  className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                  href="#"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Lihat Instruktur Lain</span>
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
        {/* END TEACHER / INSTRUKTUR */}

        {/* START ARTIKEL SECTION */}
        <div className="rbt-blog-area bg-color-extra2 rbt-section-gap2Bottom">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-pink-opacity">Artikel</span>
                  <h2 className="title">Artikel Pilihan Terpopuler</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/blog"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Lihat Artikel Lainnya</span>
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
            <BlogGridTop BlogData={blogs} />
          </div>
        </div>
        {/* END ARTIKEL SECTION */}

        {/* START CONTACT US */}
        <div className="rbt-callto-action-area rbt-section-gap2Top">
          <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75 ">
            <ContactUs btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
          </div>
        </div>
        {/* END CONTACT US */}

        {/* START OUR APPS */}
        <div className="rbt-section-gap2">
          <OurApps />
        </div>
        {/* END OUR APPS */}
      </main>
    </>
  );
};

export default MainPage;
