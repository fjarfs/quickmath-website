import Image from "next/image";
import Link from "next/link";

import education1 from "../../public/images/banner/foto-utama.png";

const MainHomeBanner = ({}) => {
  return (
    <>
      <div className="container-fluid px-5 pb--50 px-md-4">
        <div className="row pb--120 pt--20">
          <div className="col-md-12 space-responsive-xxl">
            <div className="content row d-flex">
              <div className="inner col-md-12 col-lg-7">
                <h1 className="title">
                  Belajar
                  <span className="theme-gradient">
                    {" "}
                    Kapan Saja dan Di Mana Saja{" "}
                  </span>
                  Untuk Semua Tingkatan
                </h1>
                <div className="more-author-text">
                  <h5 className="total-join-students">
                    Platform Bimbingan Belajar Online untuk semua Jenjang Pendidikan, SD SMP SMP hingga Kuliah
                  </h5>
                  <p className="subtitle">
                    Daftar Sekarang dan Mulai Perjalanan Belajarmu!
                  </p>
                </div>

                <div className="rbt-button-group justify-content-start mt--30">
                  <Link
                    className="rbt-btn btn-gradient rbt-switch-btn"
                    href="/download-apps"
                  >
                    <span data-text="Daftar Sekarang">Daftar Sekarang</span>
                  </Link>
                </div>
              </div>
              <div className="shape-wrapper col-lg-5 d-lg-flex d-sm-none justify-content-center" id="scene">
                <Image
                  className="rounded-5"
                  src={education1}
                  width={500}
                  height={270}
                  alt="QuickMath"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHomeBanner;
