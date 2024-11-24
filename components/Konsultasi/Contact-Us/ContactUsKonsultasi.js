import Link from "next/link";
import NewsletterData from "../../../data/elements/newsletter.json";
import Image from "next/image";

const ContactUsKonsultasi = () => {
  return (
    <div className="container">
      <div className="row g-5 align-items-center">
        {NewsletterData &&
          NewsletterData.newsletterTwo.map((data, index) => (
            <div className="col-lg-5 col-md-12 col-12" key={index}>
              <div className="inner">
                <div className="section-title text-center text-lg-start">
                  <h4 className="title">
                    <strong>Punya Pertanyaan? Kami Siap Membantu Anda!</strong> <br />
                  </h4>
                </div>
              </div>
              <div className="call-to-btn text-start mt--30">
                      <Link className="rbt-btn btn-gradient hover-icon-reverse radius-round" href="#">
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
          ))}
        <div className="col-lg-7 col-md-12 col-12 text-start text-sm-end">
        <div className="thumbnail">
                <Image
                  className="w-100"
                  src=""
                  width={272}
                  height={386}
                  alt="Shape Images"
                />
              </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsKonsultasi;
