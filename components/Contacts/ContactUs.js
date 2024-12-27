import Image from "next/image";
import Link from "next/link";


const ContactUs = ({}) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center content-wrapper row--30 mt_dec--30 position-relative">
          <div className="col-lg-8 mt--30 offset-lg-3">
            <div className="inner">
              <div className="content text-left">
                <h4 className="title">
                  Punya Pertanyaan? <br/>Kami Siap Membantu Anda!
                </h4>
                <div className="call-to-btn text-start mt--30">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                    href="https://wa.me/6282133599318?text=Hello%20there!%20I%20would%20like%20to%20ask%20about%20your%20services."
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
              className="ri-mail-send-fill color-primary"
              style={{ fontSize: "280px" }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
