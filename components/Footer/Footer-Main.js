import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo_hor.svg";

import FooterMainData from "../../data/landing-page/footerMainData.json"
import SingleFooter from "./FooterProps/SingleFooter";
import CopyRight from "./CopyRight";
import { useAppContext } from "@/context/Context";

const FooterMain = () => {
  const { isLightTheme } = useAppContext();
  return (
    <>
      <footer className="rbt-footer footer-style-1">
        <div className="footer-top">
          <div className="container">
            {FooterMainData &&
              FooterMainData.footerMainData.map((footer, index) => (
                <div className="row row--15 mt_dec--30" key={index}>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                    <div className="footer-widget">
                      <div className="logo">
                        <Link href="/">
                          {isLightTheme ? (
                            <Image
                              src={logo}
                              width={200}
                              height={50}
                              priority={true}
                              alt="Education Logo Images"
                            />
                          ) : (
                            <Image
                              src={logo}
                              width={152}
                              height={50}
                              priority={true}
                              alt="Education Logo Images"
                            />
                          )}
                        </Link>
                      </div>

                      <p className="description mt--20">{footer.description}</p>

                      <div className="contact-btn mt--30">
                        <Link
                          className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                          href="https://wa.me/6282133599318"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">Hubungi Kami</span>
                            <span className="btn-icon">
                              <i className="feather-phone-outgoing"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-phone-incoming"></i>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <SingleFooter
                    classOne="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30"
                    title="Fitur"
                    footerType={footer.feature}
                  />

                  <SingleFooter
                    classOne="col-lg-2 col-md-6 col-sm-6 col-12 mt--30"
                    title="Tautan"
                    footerType={footer.usefulLinks}
                  />

                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                    <div className="footer-widget">
                      <h5 className="ft-title">Hubungi Kami</h5>
                      <ul className="ft-link">
                        <li>
                          <span>Nomor Telepon: </span>
                          <Link href="https://wa.me/6282133599318">{footer.phone}</Link>
                        </li>
                        <li>
                          <span>E-mail: </span>
                          <Link href="mailto:admin@quickmath.id">
                            {footer.mail}
                          </Link>
                        </li>
                        <li>
                          <span>Lokasi: </span> {footer.address}
                        </li>
                      </ul>
                      <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                        {footer.socialLink.map((value, innerIndex) => (
                          <li key={innerIndex}>
                            <Link href={value.link}>
                              <i className={value.icon} style={{ fontSize: "20px" }}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
};

export default FooterMain;
