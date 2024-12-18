"use client";

import CourseDetails from "../../../../data/course-details/courseData.json";
import PromoData from "../../../../data/landing-page/promoList.json";

import PromoHead from "@/components/Category/PromoHead";
import Pagination from "@/components/Common/Pagination";
import Separator from "@/components/Common/Separator";
import FooterMain from "@/components/Footer/Footer-Main";
import HeaderStyleMain from "@/components/Header/HeaderStyle-Main";
import MobileMenu from "@/components/Header/MobileMenu";
import PromoListAll from "@/components/Promo/Promo";
import Context from "@/context/Context";
import Store from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

const PromoLayout = () => {
  const ITEMS_PER_PAGE = 3; // Jumlah item per halaman
  const [allPromos] = useState(PromoData.promoList); // Data asli
  const [filteredPromos, setFilteredPromos] = useState(allPromos); // Data setelah difilter
  const [page, setPage] = useState(1); // Halaman aktif
  const [totalPages, setTotalPages] = useState(0); // Total halaman

  // Hitung data yang akan ditampilkan berdasarkan halaman aktif
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedGridPromos = filteredPromos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Fungsi untuk filter item berdasarkan kategori
  const filterItem = (type) => {
    const updatedPromos =
      type !== "Semua Promo"
        ? allPromos.filter((promo) => promo.promoType === type)
        : allPromos;

    setFilteredPromos(updatedPromos);
    setPage(1); // Reset ke halaman pertama setelah filter
  };

  // Fungsi untuk menangani perubahan halaman
  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Hitung total halaman berdasarkan data yang sedang difilter
  useEffect(() => {
    setTotalPages(Math.ceil(filteredPromos.length / ITEMS_PER_PAGE));
  }, [filteredPromos]);
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleMain headerSticky="rbt-sticky" headerType="" />

          <PromoHead
            promoFilter={filteredPromos}
            setPromoFilter={setFilteredPromos}
            filterItem={filterItem}
            category={allPromos}
          />

          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <PromoListAll promo={selectedGridPromos} start={0} end={3}/>
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
            </div>
          </div>

          <Separator />
          <FooterMain />
        </Context>
      </Provider>
    </>
  );
};

export default PromoLayout;
