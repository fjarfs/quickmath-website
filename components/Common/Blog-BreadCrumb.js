import Image from "next/image";
import Link from "next/link";

import bgImage from "../../public/images/bg/bg-image-10.jpg";

const BlogBreadCrumb = ({ matchedBlog }) => {
  return (
    <>
      <div className="breadcrumb-image-container breadcrumb-style-max-width">
        <div className="breadcrumb-image-wrapper">
          <div className="breadcrumb-dark">
            <Image src={bgImage} alt="Education Images" />
          </div>
        </div>
        <div className="breadcrumb-content-top text-center">
          <ul className="meta-list justify-content-center mb--10">
            <li className="list-item">
              <div className="author-thumbnail">
                {matchedBlog && (
                  <Image
                    src={matchedBlog.authorImg}
                    width={494}
                    height={494}
                    alt="blog-image"
                  />
                )}
              </div>
              {matchedBlog && (
                <div className="author-info">
                  <Link href="#">
                    <strong>Author Name</strong>
                  </Link>
                  {/* <Link href="#">
                    <strong>{matchedBlog.position}</strong>
                  </Link> */}
                </div>
              )}
            </li>
            {matchedBlog && (
              <li className="list-item">
                <i className="feather-clock"></i>
                <span>Aug 27 2024</span>
              </li>
            )}
          </ul>
          {matchedBlog && <h1 className="title">Title-1</h1>}
          {matchedBlog && <p>Short desc</p>}
        </div>
      </div>
    </>
  );
};

export default BlogBreadCrumb;
