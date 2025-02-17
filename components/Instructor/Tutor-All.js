"use client";

import Link from "next/link";
import TeamData from "../../data/elements/team.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import Pagination from "../Common/Pagination";

const TutorAll = ({ isPagination, start, end }) => {
  const [tutors, setTutors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 6;
  const selectedGridTutors = tutors.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTutors(TeamData.team);
    setTotalPages(Math.ceil(TeamData.team.length / 6));
  }, [setTotalPages]);
  return (
    <>
      <div className="container rbt-section-gap2Bottom">
        <div className="row">
          {TeamData &&
            selectedGridTutors.slice(start, end).map((data, index) =>
              data.details.map((item, innerIndex) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt--50">
                  <div className="rbt-team team-style-default rbt-hover-02">
                    <div className="inner">
                      <div className="thumbnail">
                        <Image
                          src={item.img}
                          width={415}
                          height={555}
                          priority
                          alt="Corporate Template"
                        />
                      </div>
                      <div className="content">
                        <h2 className="title">{item.name}</h2>
                        <h6 className="subtitle theme-gradient">{item.type}</h6>
                        <span className="team-form">
                          <i className="feather-map-pin"></i>
                          <span className="location">{item.location}</span>
                        </span>
                        <p className="description">{item.desc}</p>
                        {/* <ul className="social-icon social-default icon-naked mt--20">
                          <li>
                            <Link href="https://www.facebook.com/">
                              <i className="feather-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.twitter.com">
                              <i className="feather-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/">
                              <i className="feather-instagram"></i>
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
        </div>
        {isPagination ? (
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
    </>
  );
};

export default TutorAll;
