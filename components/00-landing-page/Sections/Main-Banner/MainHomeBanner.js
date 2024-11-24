import Image from "next/image";
import Link from "next/link";

import languageClub from "../../../../public/images/banner/language-club.png";

const MainHomeBanner = ({}) => {
  return (
    <>
      <div className="container-fluid px-5 pb--50 px-md-4">
        <div className="row">
          <div className="col-md-12 pb--120 pt--20 space-responsive-xxl">
            <div className="content">
              <div className="inner">
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
                    Bimbingan Belajar Online untuk Semua Jenjang, dari SD hingga Kuliah
                  </h5>
                  <p className="subtitle">Daftar Sekarang dan Mulai Perjalanan Belajarmu!</p>
                </div>

                <div className="rbt-button-group justify-content-start mt--30">
                  <Link
                    className="rbt-btn btn-gradient rbt-switch-btn"
                    href="#"
                  >
                    <span data-text="Sign Up Now">Sign Up Now</span>
                  </Link>
                  <Link className="rbt-btn btn-border rbt-switch-btn" href="#">
                    <span data-text="Find Courses">Find Courses</span>
                  </Link>
                </div>
              </div>
              <div className="shape-wrapper" id="scene">
                <Image
                  src={languageClub}
                  width={597}
                  height={479}
                  alt="Education Images"
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
