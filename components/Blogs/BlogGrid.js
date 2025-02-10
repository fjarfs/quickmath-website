"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import BlogGridTop from "./Blog-Sections/BlogGrid-Top";
import Pagination from "../Common/Pagination";

const BlogGrid = ({ isPagination, blogdata, top }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const perPage = blogdata.per_page;

  const startIndex = (page - 1) * perPage;
  const selectedGridBlogs = blogs.slice(startIndex, startIndex + perPage);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setBlogs(blogdata.data);
    setPage(blogdata.current_page);
    setTotalPages(Math.ceil(blogdata.to / perPage));
  }, [setTotalPages, setBlogs]);

  return (
    <>

      <div className="row g-5 mt--15">
        {blogdata &&
          selectedGridBlogs.map((data, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
              <div className="rbt-card variation-02 rbt-hover">
                <div className="rbt-card-img">
                  <Link href={`/artikel-details/${data.slug}`}>
                    <Image
                      src={data.cover_photo_path_url}
                      width={450}
                      height={267}
                      priority
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link href={`/artikel-details/${data.slug}`}>
                      {data.title}
                    </Link>
                  </h5>
                  
                  <p className="rbt-card-text">{data?.sub_body}</p>
                  <div className="rbt-card-bottom">
                    <Link
                      className="transparent-button"
                      href={`/artikel-details/${data.slug}`}
                    >
                      Selengkapnya
                      <i>
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                    <p className="fs-5">{data.published_at}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    </>
  );
};

export default BlogGrid;
