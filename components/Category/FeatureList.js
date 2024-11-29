import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import FeatureListData from "../../data/landing-page/featureList.json";

const FeatureList = () => {
  return (
    <>
      <Swiper
        className="swiper category-activation-one rbt-arrow-between rbt-dot-bottom-center icon-bg-gray gutter-swiper-30 ptb--20"
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        loop={true}
        pagination={{
          el: ".rbt-swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".rbt-arrow-right",
          prevEl: ".rbt-arrow-left",
        }}
        breakpoints={{
          481: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {FeatureListData &&
          FeatureListData.featureList.slice(0, 8).map((item, innerIndex) => {
            return (
              <SwiperSlide className="swiper-wrapper" key={innerIndex}>
                <div className="swiper-slide">
                  <div className="single-slide">
                    <Link
                      className="rbt-cat-box rbt-cat-box-1 text-center"
                      href={item.path}
                    >
                      <div className="inner">
                        <div className="icons">
                          <Image
                            src={item.featIcon}
                            width={60}
                            height={60}
                            priority
                            alt="Icons Images"
                          />
                        </div>
                        <div className="content">
                          <h5 className="title">{item.category}</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        <div className="rbt-swiper-arrow rbt-arrow-left">
          <div className="custom-overfolow">
            <i className="rbt-icon feather-arrow-left"></i>
            <i className="rbt-icon-top feather-arrow-left"></i>
          </div>
        </div>

        <div className="rbt-swiper-arrow rbt-arrow-right">
          <div className="custom-overfolow">
            <i className="rbt-icon feather-arrow-right"></i>
            <i className="rbt-icon-top feather-arrow-right"></i>
          </div>
        </div>

        <div className="rbt-swiper-pagination d-lg-none d-sm-block" style={{ bottom: "0" }}></div>
      </Swiper>
    </>
  );
};

export default FeatureList;