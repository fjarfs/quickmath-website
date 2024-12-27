import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";
import Image from "next/image";

import downloadPLayStore from "/public/images/icons/download-playstore.svg";
import downloadAppStore from "/public/images/icons/download-appstore.svg";

const OurApps = () => {
  return (
    <>
      <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h1 className="title">
                    Unduh Aplikasi Kami, <br />
                    Mulai Belajar Kapan Saja dan Di Mana Saja!
                  </h1>
                  <p>Tersedia di Pay Store dan App Store</p>
                  <div className="d-flex justify-content-center">
                    <Link className="mr--5" href="https://play.google.com/store/apps/details?id=com.quickmath.customer">
                      <Image
                        src={downloadPLayStore}
                        width={200}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    </Link>
                    <Link className="ml--5" href="https://apps.apple.com/app/id6739167059">
                      <Image
                        src={downloadAppStore}
                        width={190}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurApps;
