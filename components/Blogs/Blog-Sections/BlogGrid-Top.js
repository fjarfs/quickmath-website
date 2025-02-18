import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogGridTop = ({ BlogData }) => {
  // Media query untuk mendeteksi perangkat mobile
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="container">
      {isClient && isMobile ? (
        // Swiper hanya di perangkat mobile
        <Swiper spaceBetween={20} slidesPerView={1}>
          {BlogData.data.map((data, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rbt-card ${
                  index === 0
                    ? "variation-02 height-330 rbt-hover"
                    : "card-list variation-02 rbt-hover"
                }`}
              >
                <div className="rbt-card-img">
                  <Link key={index} href={`/artikel/${data.slug}`}>
                    <Image
                      src={data.cover_photo_path_url}
                      width={580}
                      height={300}
                      priority
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h3 className="rbt-card-title">
                    <Link key={index} href={`/artikel/${data.slug}`}>{data.title}</Link>
                  </h3>
                  <p className="rbt-card-text">{data.sub_body}</p>
                  <div className="rbt-card-bottom">
                    <Link
                      className="transparent-button"
                      key={index}
                      href={`/artikel/${data.slug}`}
                    >
                      {index === 0 ? "Learn More" : "Read Article"}
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Grid layout untuk perangkat non-mobile
        <div className="row g-5">
          <div
            className="col-lg-6 col-md-12 col-sm-12 col-12"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            {BlogData.data.slice(0, 1).map((data, index) => (
              <div
                className="rbt-card variation-02 height-330 rbt-hover"
                key={index}
              >
                <div className="rbt-card-img">
                  <Link href={`/artikel/${data.slug}`}>
                    <Image
                      src={data.cover_photo_path_url}
                      width={580}
                      height={300}
                      priority
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h3 className="rbt-card-title">
                    <Link href={`/artikel/${data.slug}`}>
                      {data.title}
                    </Link>
                  </h3>
                  <p className="rbt-card-text">{data.sub_body}</p>
                  <div className="rbt-card-bottom">
                    <Link
                      className="transparent-button"
                      href={`/artikel/${data.slug}`}
                    >
                      Selengkapnya
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 col-12"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            {BlogData.data.slice(1, 4).map((data, index) => (
              <div
                className={`rbt-card card-list variation-02 rbt-hover ${
                  index !== 0 ? "mt--30" : ""
                }`}
                key={index}
              >
                <div className="rbt-card-img">
                  <Link href={`/artikel/${data.slug}`}>
                    <Image
                      src={data.cover_photo_path_url}
                      width={580}
                      height={300}
                      priority
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title-side">
                    <Link href={`/artikel/${data.slug}`}>
                      {data.title}
                    </Link>
                  </h5>
                  <div className="rbt-card-bottom">
                    <Link
                      className="transparent-button"
                      href={`/artikel/${data.slug}`}
                    >
                      Selengkapnya
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogGridTop;
