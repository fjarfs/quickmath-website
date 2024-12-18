"use client";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import MobileMenu from "@/components/Header/MobileMenu";
import TestimoniAll from "@/components/Testimonials/Testimoni-All";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import TestimonialData from "../../../../data/elements/testimonial.json";
import { useEffect, useState } from "react";
import Pagination from "@/components/Common/Pagination";

const TestimoniLayout = () => {
  const [testimoni, setTestimoni] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 6;
  const selectedGridTestimoni = testimoni.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTestimoni(TestimonialData.testimoniAll);
    setTotalPages(Math.ceil(TestimonialData.testimoniAll.length / 6));
  }, [setTotalPages]);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />
          <BreadCrumb title="Testimoni" text="Testimoni" />

          <div className="rbt-section-gap2">
            <TestimoniAll
              isDesc={true}
              testimoniData={selectedGridTestimoni}
              start={0}
              end={6}
              isPagination={true}
            />
            {totalPages > 1 ? (
              <div className="row">
                <div className="col-lg-12 mt--60">
                  <Pagination
                    totalPages={totalPages}
                    pageNumber={page}
                    handleClick={handleClick}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <Separator />
          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default TestimoniLayout;
