import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const PromoList = ({ PromoListData }) => {
  const showNavigation = PromoListData?.data?.length > 4;

  return (
    <>
      <Swiper
        className="swiper category-activation-one rbt-arrow-between rbt-dot-bottom-center icon-bg-gray gutter-swiper-30"
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        loop={true}
        pagination={{
          el: ".rbt-swiper-pagination",
          clickable: true,
        }}
        navigation={
          showNavigation && {
            nextEl: ".rbt-arrow-right",
            prevEl: ".rbt-arrow-left",
          }
        }
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
            slidesPerView: 4,
          },
        }}
      >
        {PromoListData &&
          PromoListData.data.slice(0, 5).map((item, innerIndex) => {
            return (
              <SwiperSlide className="swiper-wrapper" key={innerIndex}>
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-1 variation-3 text-center">
                      <div className="inner">
                        <div className="thumbnail">
                          <Link
                            className="position-relative"
                            href={`/promo/${item.id}`}
                            style={{ width: "100%", height: "104px" }}
                          >
                            <Image
                              src={item.image_url}
                              fill
                              alt="Promo Images"
                              style={{ objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        {showNavigation && (
          <>
            <div className="rbt-swiper-arrow rbt-arrow-left d-sm-none d-lg-block">
              <div className="custom-overfolow">
                <i className="rbt-icon feather-arrow-left"></i>
                <i className="rbt-icon-top feather-arrow-left"></i>
              </div>
            </div>

            <div className="rbt-swiper-arrow rbt-arrow-right d-sm-none d-lg-block">
              <div className="custom-overfolow">
                <i className="rbt-icon feather-arrow-right"></i>
                <i className="rbt-icon-top feather-arrow-right"></i>
              </div>
            </div>
          </>
        )}

        <div
          className="rbt-swiper-pagination d-lg-none d-sm-block"
          style={{ bottom: "0" }}
        ></div>
      </Swiper>
    </>
  );
};

export default PromoList;
