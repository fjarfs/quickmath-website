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

const WhyUsMain = () => {
  const { values } = useFetch(CounterData, "counterTwo");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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

                  {/* {data.body.map((item, innerIndex) => (
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
                  ))} */}
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="inner pl--50 pl_sm--0 pl_md--0">
                  <div className="section-title text-start">
                    <span className="subtitle bg-pink-opacity">{data.tag}</span>
                    <h2 className="title">
                      {data.title} <br /> {data.subTitle}
                    </h2>
                    <p className="description has-medium-font-size mt--20 mb--0">
                      {data.desc}
                    </p>
                  </div>

                  <div className="rbt-feature-wrapper mt--30">
                    {data.item.map((item, innerIndex) => (
                      <div
                        className="rbt-feature feature-style-1 align-items-center"
                        key={innerIndex}
                      >
                        <div
                          className={`icon ${
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
                        <div className="feature-content">
                          <h6 className="feature-title">{item.text}</h6>
                        </div>
                      </div>
                    ))}
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
