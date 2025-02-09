"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});

import CounterData from "../../data/elements/counter.json";
import WhyUsData from "../../data/landing-page/whyUsData.json";
import useFetch from "@/context/useFetch";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const WhyUsMain = () => {
  const { values } = useFetch(WhyUsData, "counterTwo");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="conter-style-2">
      {WhyUsData &&
        WhyUsData.counterTwo.map((data, index) => (
          <div className="container" key={index}>
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="row row--30">
                  {isMobile ? (
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={20} // Jarak antar slide
                      slidesPerView={1} // Satu slide per tampilan
                      loop={false}
                      pagination={{
                        el: ".rbt-swiper-pagination",
                        clickable: true,
                      }}
                      className="p-5 swiper rbt-dot-bottom-center"
                    >
                      {data.body.map((item, innerIndex) => (
                        <SwiperSlide key={innerIndex}>
                          <div className="rbt-counterup rbt-hover-03">
                            <div className="inner">
                              <div className="icon">
                                <Image
                                  src={item.img}
                                  width={100}
                                  height={100}
                                  alt="Icons Images"
                                />
                              </div>
                              <div className="content">
                                <h3 className="counter">
                                  <span className="odometer">
                                    <Odometer
                                      value={
                                        values[
                                          index * data.body.length + innerIndex
                                        ]
                                      }
                                    />
                                  </span>
                                </h3>
                                <span className="subtitle">{item.text}</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div
                        className="rbt-swiper-pagination d-lg-none d-sm-block"
                        style={{ bottom: "0" }}
                      ></div>
                    </Swiper>
                  ) : (
                    // Tampilan biasa untuk desktop
                    <div className="row">
                      {data.body.map((item, innerIndex) => (
                        <div
                          className={`col-lg-6 col-md-6 col-sm-6 col-12 ${item.mt}`}
                          key={innerIndex}
                        >
                          <div className="rbt-counterup rbt-hover-03">
                            <div className="inner">
                              <div className="icon">
                                <Image
                                  src={item.img}
                                  width={100}
                                  height={100}
                                  alt="Icons Images"
                                />
                              </div>
                              <div className="content">
                                <h3 className="counter">
                                  <span className="odometer">
                                    <Odometer
                                      value={
                                        values[
                                          index * data.body.length + innerIndex
                                        ]
                                      }
                                    />
                                  </span>
                                </h3>
                                <span className="subtitle">{item.text}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 plr--50">
                <div className="rbt-accordion-style accordion">
                  <div className="section-title text-start">
                    <span className="subtitle bg-pink-opacity">{data.tag}</span>
                    <h2 className="title">
                      {data.title} <br /> {data.subTitle}
                    </h2>
                    <p className="description has-medium-font-size mt--20 mb--40">
                      {data.desc}
                    </p>
                    <p className="description has-medium-font-size mt--20 mb--40">
                      {data.desc2}
                    </p>
                  </div>
                  <div className="rbt-accordion-style rbt-accordion-02 accordion">
                    <div
                      className="accordion rbt-feature-wrapper"
                      id="accordionExampleb2"
                    >
                      {data.item.map((item, innerIndex) => (
                        <div className="accordion-item card" key={innerIndex}>
                          <h2
                            className="accordion-header card-header"
                            id={item.heading}
                          >
                            <button
                              className={`accordion-button d-flex ${
                                !item.collapsed ? "collapsed" : ""
                              }`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${item.collapse}`}
                              aria-expanded={item.expanded}
                              aria-controls={item.collapse}
                            >
                              <div
                                className={`icon rounded-circle pt-2 pb-2 ps-3 pe-3 mr--10 ${
                                  item.primary
                                    ? "bg-primary-opacity"
                                    : "" || item.secondary
                                    ? "bg-secondary-opacity"
                                    : "" || item.pink
                                    ? "bg-pink-opacity"
                                    : ""
                                }`}
                              >
                                <i className={item.icon}></i>
                              </div>
                              {item.text}
                            </button>
                          </h2>
                          <div
                            id={item.collapse}
                            className={`accordion-collapse collapse ${
                              item.show ? "show" : ""
                            }`}
                            aria-labelledby={item.heading}
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body desc-dark">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WhyUsMain;
