import Link from "next/link";

import CallToActionData from "../../../../data/elements/calltoaction.json";

const OurApps = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="rbt-cta-5">
                {CallToActionData &&
                  CallToActionData.collectionFive.map((data, index) => (
                    <div className="content" key={index}>
                      <h3 className="sub-title">
                        Unduh Aplikasi Kami, Mulai Belajar <br /> Kapan Saja dan
                        Di Mana Saja!
                      </h3>
                      {/* <p>{data.desc}</p> */}
                      <div className="rbt-button-group justify-content-start">
                        <Link
                          className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                          href="#"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">Play Store</span>
                            <span className="btn-icon">
                              <i
                                className="ri-google-play-fill"
                                style={{ fontSize: "30px" }}
                              ></i>
                            </span>
                            <span className="btn-icon">
                              <i
                                className="ri-google-play-line"
                                style={{ fontSize: "30px" }}
                              ></i>
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                          href="#"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">App Store</span>
                            <span className="btn-icon">
                              <i
                                className="ri-app-store-fill"
                                style={{ fontSize: "30px" }}
                              ></i>
                            </span>
                            <span className="btn-icon">
                              <i
                                className="ri-app-store-line"
                                style={{ fontSize: "30px" }}
                              ></i>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurApps;
