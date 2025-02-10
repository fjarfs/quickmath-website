import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

const LesPrivatePricing = ({}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="container">
      {isMobile ? (
        // Swiper hanya di perangkat mobile
        <Swiper 
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="advance-pricing">
              <div className="inner">
                <div className="row row--0">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="pricing-left rounded-0">
                      <h3 className="main-title">Les Privat</h3>
                      <p className="description">
                      Datapkan tutor privat terbaik dengan harga sesuai
                      </p>
                      <div className="price-wrapper">
                        <span className="price-amount">
                        Rp 50.000<sup>/sesi</sup>
                        </span>
                      </div>
                      <div className="pricing-btn-group" style={{marginTop: 50}}>
                          <Link
                            className="rbt-btn btn-gradient hover-icon-reverse"
                            href="/download-apps"
                          >
                            <span className="icon-reverse-wrapper" >
                              <span className="btn-text">Pesan</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </Link>
                        </div>
                      <div className="rating">
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                        <Link href="#rating">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </Link>
                      </div>
                      <small className="subtitle">
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="advance-pricing rounded-0">
            <div className="inner">
              <div className="row row--0">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="pricing-right position-relative">
                    <div className="pricing-offer">
                      <div className="single-list">
                        <h4 className="price-title">
                        Yang akan kamu dapatkan
                        </h4>
                        <ul className="plan-offer-list">
                          <li>
                            <i className="feather-check"></i> Belajar 1-on-1
                          </li>
                          <li>
                            <i className="feather-check"></i> Live Meeting Online
                          </li>
                          <li>
                            <i className="feather-check"></i> Pilih Tutor Terbaik 
                          </li>
                          <li>
                            <i className="feather-check"></i> Request Materi & Soal 
                          </li>
                          <li>
                            <i className="feather-check"></i> Jadwal Fleksibel
                          </li>
                          <li>
                            <i className="feather-check"></i> Interaktif & Personal
                          </li>
                          <li>
                            <i className="feather-check"></i> 1 sesi 45 menit
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pricing-badge">
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        // Grid layout untuk perangkat non-mobile
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="advance-pricing">
                <div className="inner">
                  <div className="row row--0">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="pricing-left">
                        <h3 className="main-title">Les Privat</h3>
                        <p className="description">
                        Datapkan tutor privat terbaik dengan harga sesuai
                        </p>
                        <div className="price-wrapper">
                          <span className="price-amount">
                            Rp 50.000<sup>/sesi</sup>
                          </span>
                        </div>
                        <div className="pricing-btn-group" style={{marginTop: 50}}>
                          <Link
                            className="rbt-btn btn-gradient hover-icon-reverse"
                            href="/download-apps"
                          >
                            <span className="icon-reverse-wrapper" >
                              <span className="btn-text">Pesan</span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right"></i>
                              </span>
                            </span>
                          </Link>
                        </div>
                        <div className="rating">
                          <Link href="#rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </Link>
                          <Link href="#rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </Link>
                          <Link href="#rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </Link>
                          <Link href="#rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </Link>
                          <Link href="#rating">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="pricing-right position-relative">
                        <div className="pricing-offer">
                          <div className="single-list">
                            <h4 className="price-title">
                              Yang akan kamu dapatkan
                            </h4>
                            <ul className="plan-offer-list">
                              <li>
                                <i className="feather-check"></i> Belajar 1-on-1
                              </li>
                              <li>
                                <i className="feather-check"></i> Live Meeting Online
                              </li>
                              <li>
                                <i className="feather-check"></i> Pilih Tutor Terbaik 
                              </li>
                              <li>
                                <i className="feather-check"></i> Request Materi & Soal 
                              </li>
                              <li>
                                <i className="feather-check"></i> Jadwal Fleksibel
                              </li>
                              <li>
                                <i className="feather-check"></i> Interaktif & Personal
                              </li>
                              <li>
                                <i className="feather-check"></i> 1 sesi 45 menit
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pricing-badge">
                          <span>Popular</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LesPrivatePricing;
