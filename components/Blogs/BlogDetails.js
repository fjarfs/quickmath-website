"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

const BlogDetails = ({ data, isSlider, isQuote, isAudio, isVideo }) => {
  const thumbsSwiperRef = useRef(null);

  return (
    <>
      <div className="content">
        {isQuote || isAudio || isVideo ? (
          ""
        ) : (
          <>
            {/* START BANNER ARTIKEL */}
            {isSlider ? (
              <div className="post-thumbnail mb--30 position-relative wp-block-image blog-post-gallery-wrapper alignwide">
                <Swiper
                  className="swiper rbt-arrow-between blog-post-gallery-activation"
                  modules={[FreeMode, Navigation]}
                  ref={thumbsSwiperRef}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={false}
                  autoHeight={true}
                  navigation={{
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: true,
                  }}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <figure>
                        <Image
                          src={data.cover_photo_path_url}
                          width={1085}
                          height={645}
                          priority
                          alt="Blog Images"
                        />
                      </figure>
                    </SwiperSlide>
                  </div>
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
                </Swiper>
              </div>
            ) : (
              <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                <figure>
                  <Image
                    src={data.cover_photo_path_url}
                    width={1085}
                    height={645}
                    priority
                    alt="Blog Images"
                  />
                  {/* <figcaption>{data.title}</figcaption> */}
                </figure>
              </div>
            )}
            {/* END BANNER ARTIKEL */}
          </>
        )}

        {isAudio ? (
          <audio className="mb--40" controls>
            <source
              src="http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/audio.mp3"
              type="audio/ogg"
            />
            Your browser does not support the audio tag.
          </audio>
        ) : (
          ""
        )}

        {isVideo ? (
          <div className="ratio ratio-16x9 alignwide mb--30">
            <iframe
              className="square"
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          ""
        )}

        <div className="rbt-section-gap2Bottom">
          {
            data?.body && parse(data.body)
          }
        </div>

      </div>
    </>
  );
};

export default BlogDetails;
