"use client";

import React, { useState } from "react";

const CaraKlaimPromo = ({ checkMatchCourses }) => {
  const [toggle, setToggle] = useState(false);
  const { title, desc, descTwo, stepList } = checkMatchCourses;

  return (
    <>
      <div
        className={`rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more ${
          toggle ? "active" : ""
        }`}
        id="overview"
      >
        <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">{title}</h4>
          </div>
          <p>{desc}</p>

          <div className="row g-5 mb--30">
            <div className="col-lg-12">
              <ul className="rbt-list-style-1">
                {stepList.map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <span className="fw-bold mr--10">{innerIndex + 1}.</span>
                    {item.listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>{descTwo}</p>
        </div>
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          Show More
        </div>
      </div>
    </>
  );
};

export default CaraKlaimPromo;
