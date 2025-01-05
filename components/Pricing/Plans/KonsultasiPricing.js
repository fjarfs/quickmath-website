import React from "react";

import PricingData from "/data/elements/pricing.json";
import PricingMain from "/data/landing-page/pricing.json"
import BasicPlan from "./BasicPlan";
import StandardPlan from "./StandardPlan";
import ExclusivePlan from "./ExclusivePlan";
import { useAppContext } from "@/context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const KonsultasiPricing = ({ title, tag, col, position }) => {
  const { pricingThree, setPricingThree } = useAppContext();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });


  return (
    <>

{PricingMain &&
        PricingMain.pricing.map((data, index) => (
          <div key={index}>
            {/* Jika perangkat mobile, gunakan Swiper */}
            {isMobile ? (
              <Swiper
                modules={[Pagination]}
                loop={false}
                spaceBetween={20} // Jarak antar slide
                slidesPerView={1} // Slide yang terlihat per halaman
                pagination={{
                  el: ".rbt-swiper-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  768: { slidesPerView: 2 }, // Untuk tablet
                  1200: { slidesPerView: 3 }, // Untuk desktop
                }}
                className="swiper rbt-dot-bottom-center p-5"
              >
                {/* BasicPlan Slides */}
                {data.reguler.map((item, innerIndex) => (
                  <SwiperSlide key={`basic-${innerIndex}`}>
                    <BasicPlan
                      {...item}
                      linkButton="/download-apps"
                      item={item}
                      toggle={pricingThree}
                      styleType="three"
                      parentClass="style-2"
                    />
                  </SwiperSlide>
                ))}

                {/* StandardPlan Slides */}
                {data.kilat.map((item, innerIndex) => (
                  <SwiperSlide key={`standard-${innerIndex}`}>
                    <StandardPlan
                      {...item}
                      linkButton="/download-apps"
                      item={item}
                      toggle={pricingThree}
                      styleType="three"
                      parentClass="style-2"
                    />
                  </SwiperSlide>
                ))}

                {/* ExclusivePlan Slides */}
                {data.realTime.map((item, innerIndex) => (
                  <SwiperSlide key={`exclusive-${innerIndex}`}>
                    <ExclusivePlan
                      {...item}
                      linkButton="/download-apps"
                      item={item}
                      toggle={pricingThree}
                      styleType="three"
                      parentClass="style-2"
                    />
                  </SwiperSlide>
                ))}
                <div
                  className="rbt-swiper-pagination d-lg-none d-sm-block"
                  style={{ bottom: "0" }}
                ></div>
              </Swiper>
            ) : (
              // Layout grid untuk desktop
              <div className="row g-5">
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.reguler.map((item, innerIndex) => (
                  <BasicPlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                    linkButton={"/download-apps"}
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.kilat.map((item, innerIndex) => (
                  <StandardPlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                    linkButton={"/download-apps"}
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.realTime.map((item, innerIndex) => (
                  <ExclusivePlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                    linkButton={"/download-apps"}
                  />
                ))}
              </div>
            </div>
            )}
          </div>
        ))}
    </>
  );
};

export default KonsultasiPricing;
