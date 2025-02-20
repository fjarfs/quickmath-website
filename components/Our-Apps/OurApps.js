import Link from "next/link";

import Image from "next/image";

import downloadPLayStore from "/public/images/icons/download-playstore.svg";
import downloadAppStore from "/public/images/icons/download-appstore.svg";

const OurApps = ({OurAppsData, start, end}) => {
  return (
    <>
      {OurAppsData &&
        OurAppsData.slice(start, end).map((data, index) => (
          <div key={index} className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rbt-cta-6 text-center">
                    <div className="content">
                      <h1 className="title">
                        {data.title} <br />
                        {data.sub_title}
                      </h1>
                      <p>{data.description}</p>
                      <div className="d-flex justify-content-center">
                        <Link
                          className="mr--5"
                          href="https://play.google.com/store/apps/details?id=com.quickmath.customer"
                          target="_blank"
                        >
                          <Image
                            src={downloadPLayStore}
                            width={200}
                            height={50}
                            priority={true}
                            alt="Play Store"
                          />
                        </Link>
                        <Link
                          className="ml--5"
                          href="https://apps.apple.com/app/id6739167059"
                          target="_blank"
                        >
                          <Image
                            src={downloadAppStore}
                            width={180}
                            height={50}
                            priority={true}
                            alt="Apple Store"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default OurApps;
