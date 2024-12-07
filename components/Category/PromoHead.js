"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import CategoryBanner from "./Category-Banner";
import CourseFilter from "./Filter/CourseFilter";
import { useAppContext } from "@/context/Context";
import PromoBanner from "./Promo-Banner";

const PromoHead = ({
  category,
  filterItem,
  promoFilter,
  setPromoFilter,
}) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  const [filterToggle, setFilterToggle] = useState(true);
  const [activeTab, setActiveTab] = useState("Semua Promo");

  const handleButtonClick = (promoType) => {
    setPromoFilter(category);
    setActiveTab(promoType);
    filterItem(promoType);
  };

  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>

        <div className="rbt-banner-content">
          {category ? (
            <PromoBanner category={category} />
          ) : (
            <PromoBanner />
          )}

          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">

                {pathname === "/course-filter-one-open" ? (
                  <CourseFilter />
                ) : (
                  <CourseFilter filterToggle={filterToggle} />
                )}

                {pathname === "/promo" ? (
                  <div className="col-lg-12 mt--60">
                    <ul
                      className="rbt-portfolio-filter filter-tab-button justify-content-start nav nav-tabs"
                      id="rbt-myTab"
                      role="tablist"
                    >
                      {[
                        "Semua Promo",
                        "konsultasi tugas",
                        "les privat",
                        "bank materi",
                      ].map((promoType, index) => (
                        <li
                          key={index}
                          className="nav-item"
                          role="presentation"
                        >
                          <button
                            className={activeTab === promoType ? "active" : ""}
                            type="button"
                            onClick={() => handleButtonClick(promoType)}
                          >
                            <span className="filter-text">{promoType}</span>
                            {promoType === "Semua Promo" ? (
                              <span className="course-number">
                                {category.filter((course) => course).length}
                              </span>
                            ) : (
                              <span className="course-number">
                                0
                                {
                                  category.filter(
                                    (promo) => promo.promoType === promoType
                                  ).length
                                }
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoHead;
