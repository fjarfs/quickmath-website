import React from "react";
import Image from "next/image";
import Link from "next/link";

import TeamHead from "./TeamHead";

import TeamData from "../../data/elements/team.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Instruktur = ({start, end}) => {
  return (
    <>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          loop={false}
          spaceBetween={20} // Jarak antar slide
          slidesPerView={1} // Slide terlihat per layar
          pagination={{
            el: ".rbt-swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 }, // Tablet
            1200: { slidesPerView: 3 }, // Desktop
          }}
          className="p-5 swiper rbt-dot-bottom-center"
        >
          {/* Map TeamData */}
          {TeamData &&
            TeamData.team.slice(start, end).map((data, index) =>
              data.details.map((item, innerIndex) => (
                <SwiperSlide key={`team-${index}-${innerIndex}`}>
                  <div className="rbt-team team-style-default rbt-hover-02">
                    <div className="inner">
                      <div className="thumbnail">
                        <Image
                          src={item.img}
                          width={415}
                          height={555}
                          priority
                          alt="Corporate Template"
                        />
                      </div>
                      <div className="content">
                        <h2 className="title">{item.name}</h2>
                        <h6 className="subtitle theme-gradient">{item.type}</h6>
                        <span className="team-form">
                          <i className="feather-map-pin"></i>
                          <span className="location">{item.location}</span>
                        </span>
                        <p className="description">{item.desc}</p>
                        {/* <ul className="social-icon social-default icon-naked mt--20">
                          <li>
                            <Link href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          <div className="rbt-swiper-pagination d-lg-none d-sm-block" style={{ bottom: "0" }}></div>
        </Swiper>
      </div>
    </>
  );
};

export default Instruktur;
