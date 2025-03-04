import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import downloadPLayStore from "/public/images/icons/download-playstore.svg";
import downloadAppStore from "/public/images/icons/download-appstore.svg";

const Redirect = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent
    const isAndroid = /android/i.test(userAgent);
    if (isAndroid) {
      const appUrl = "https://play.google.com/store/apps/details?id=com.quickmath.customer";
      setTimeout(() => {
        window.location.href = appUrl;
      }, 2000);
    } else {
      const appUrl = "https://apps.apple.com/app/id6739167059";
      setTimeout(() => {
        window.location.href = appUrl;
      }, 2000);
    }
  }, []);

  return (
    <div className="main bg-color-secondary-alt">
      <div className="d-flex justify-content-center rbt-section-gap2Top">
        <div
          className="spinner-border"
          style={{
            width: "10rem",
            height: "10rem",
            fontSize: "5rem",
            color: "var(--color-primary)",
          }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="content-wrapper rbt-section-gap2">
        <div className="section-title text-center mb--20">
          <h2 className="title">
            Menuju QuickMath...
            <br /> Nikmati Kemudahan Belajar Kamu!
          </h2>
          <p className="description mt--10">
            Belum punya aplikasi kami? Kamu akan segera dialihkan ke Play Store
            atau App Store untuk mengunduhnya dan mulai belajar.
          </p>
        </div>
        <div className="d-flex justify-content-center p-3">
          <Link
            className="mr--5"
            href="https://play.google.com/store/apps/details?id=com.quickmath.customer"
          >
            <Image
              src={downloadPLayStore}
              width={200}
              height={50}
              priority={true}
              alt="Education Logo Images"
            />
          </Link>
          <Link
            className="ml--5"
            href="https://apps.apple.com/app/id6739167059"
          >
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
  );
};

export default Redirect;
