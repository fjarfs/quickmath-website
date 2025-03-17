"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { storeReferralCodeIp } from "@/services/generalService";
import axios from "axios";

import downloadPLayStore from "/public/images/icons/download-playstore.svg";
import downloadAppStore from "/public/images/icons/download-appstore.svg";

const Redirect = () => {
  const pathname = usePathname();
  const split = pathname.split("/");
  const ref = split[split.length - 1];
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    const fetchIpAndStorePromo = async () => {
      try {
        await storeReferralCodeIp(ref);
      } catch (error) {
        //
      }
    };
  
    fetchIpAndStorePromo();
    
    // Redirect ke App Store / Play Store
    const userAgent = navigator.userAgent;
    const isAndroid = /android/i.test(userAgent);
    const playStoreUrl = `https://play.google.com/store/apps/details?id=com.quickmath.customer&ref=${ref}`;
    const appStoreUrl = "https://apps.apple.com/app/id6739167059";

    setTimeout(() => {
      window.location.href = isAndroid ? playStoreUrl : appStoreUrl;
    }, 500);
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
              alt="Download di Play Store"
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
              alt="Download di App Store"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Redirect;