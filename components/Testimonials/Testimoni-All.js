import Link from "next/link";
import TestimonialData from "../../data/elements/testimonial.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../Common/Pagination";

const TestimoniAll = ({ isDesc, start, end, isPagination, testimoniData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb--60">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">Testimoni Siswa</span>
              <h2 className="title">Cerita Sukses Para Pelajar</h2>
              {isDesc ? <p className="description mt--20">Belajar efektif untuk semua jenjang, kuasai dunia, dan raih
                masa depan gemilang bersama QuickMath.</p> : ""}
            </div>
          </div>
        </div>
        <div className="row g-5">
          {testimoniData.slice(start, end).map((data, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="rbt-testimonial-box">
                <div className="inner">
                  <div className="clint-info-wrapper">
                    <div className="thumb">
                      <Image
                        src={data.img}
                        width={494}
                        height={494}
                        alt="Clint Images"
                      />
                    </div>
                    <div className="client-info">
                      <h5 className="title">{data.title}</h5>
                      <span>
                        {data.position} <i>{data.company}</i>
                      </span>
                    </div>
                  </div>
                  <div className="description">
                    <p className="subtitle-3">{data.desc}</p>
                    <div className="rating mt--20">
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                      <Link href="#">
                        <i className="fa fa-star"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimoniAll;
