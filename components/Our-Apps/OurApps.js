import Link from "next/link";

import Image from "next/image";

import downloadPLayStore from "/public/images/icons/download-playstore.svg";
import downloadAppStore from "/public/images/icons/download-appstore.svg";
import OurAppsData from "../../data/elements/comingSoon.json";

const OurApps = () => {
  return (
    <>
      {OurAppsData &&
       OurAppsData.our_apps.map((data, index) => (
          <div className="container">
          <div className="row g-5 align-items-center" key={index}>
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="inner">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">
                  {data.tag}
                </span>
                <h2 className="title">{data.title}</h2>
                <p className="description mt--20">
                  {data.description}
                </p>
                <div className="read-more-btn mt--40">
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
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="content">
              <Image
                src={data.img}
                width={638}
                height={410}
                alt="About Images"
              />
            </div>
          </div>
          </div>
          </div>
        ))}
    </>
  );
};

export default OurApps;
