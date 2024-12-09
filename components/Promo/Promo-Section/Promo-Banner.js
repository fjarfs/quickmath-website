import Image from "next/image";
import React from "react";

const PromoDetailBanner = ({ bannerImg, title, shortDesc }) => {
  return (
    <>
      <Image
        className="w-100"
        src={bannerImg}
        width={800}
        height={550}
        priority
        alt="Card image"
      />
      <div className="content mt--20">
        <h4 className="title-img">{title}</h4>
        <p className="description">{shortDesc}</p>
      </div>
    </>
  );
};

export default PromoDetailBanner;
