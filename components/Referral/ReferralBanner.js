import Image from "next/image";
import Link from "next/link";

import IconReferral from "../../public/images/feature/referral.png";

const ReferralBanner = () => {
  return (
    <div className="container-fluid px-5 pb--50 px-md-4">
      <div className="row pb--120 pt--20">
        <div className="col-md-12 space-responsive-xxl">
          <div className="content row d-flex">
            <div className="inner col-md-12 col-lg-7">
              <h1 className="title">
              Kamu Dapat 
                <span className="theme-gradient">
                  {" "}
                  Cuan{" "}
                </span>
                <br></br>
                Teman Dapat 
                <span className="theme-gradient">
                  {" "}
                  Diskon{" "}
                </span>
              </h1>
              <div className="more-author-text">
                <h5 className="total-join-students">
                  Bimbingan Belajar Online untuk Semua Jenjang, dari SD hingga
                  Kuliah
                </h5>
                <p className="subtitle">
                  Daftar Sekarang dan Mulai Perjalanan Belajarmu!
                </p>
              </div>

              <div className="rbt-button-group justify-content-start mt--30">
                <Link
                  className="rbt-btn btn-gradient rbt-switch-btn"
                  href="/redirect"
                >
                  <span data-text="Gabung Sekarang">Gabung Sekarang</span>
                </Link>
              </div>
            </div>
            <div
              className="shape-wrapper col-lg-5 d-lg-flex d-sm-none justify-content-center"
              id="scene"
            >
              <Image
                className="rounded-5"
                src={IconReferral}
                width={360}
                height={270}
                alt="Education Images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
