import Image from "next/image";
import Link from "next/link";

import CallToActionData from "../../../../data/elements/calltoaction.json";

const ContactUs = ({}) => {
  return (
    <>
      <div className="container">
        {CallToActionData &&
          CallToActionData.collectionFour.map((data, index) => (
            <div
              className="row align-items-center content-wrapper row--30 mt_dec--30 position-relative"
              key={index}
            >
              <div className="col-lg-8 mt--30 offset-lg-3">
                <div className="inner">
                  <div className="content text-left">
                    <h3 className="title" data-sal="slide-up">
                      Butuh Bantuan? Hubungi Kami dan Dapatkan Solusi Terbaik
                      Sekarang!
                    </h3>
                    <div className="call-to-btn text-start mt--30">
                      <Link
                        className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                        href="#"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Hubungi Kami</span>
                          <span className="btn-icon">
                            <i className="feather-phone-outgoing"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather-phone-incoming"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumbnail">
                <i
                  className="ri-mail-send-line color-primary"
                  style={{ fontSize: "280px" }}
                ></i>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ContactUs;
