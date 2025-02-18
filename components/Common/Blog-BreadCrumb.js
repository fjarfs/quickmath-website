import Image from "next/image";
import Link from "next/link";

import bgImage from "../../public/images/bg/bg-image-10.jpg";

const BlogBreadCrumb = ({ data }) => {
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
              {data && (
                <div className="author-info">
                  <Link href="#">
                    <strong>Admin</strong>
                  </Link>
                  {/* <Link href="#">
                    <strong>{data.position}</strong>
                  </Link> */}
                </div>
              )}
            </li>
            {data && (
              <li className="list-item">
                <i className="feather-clock"></i>
                <span>{data.published_at}</span>
              </li>
            )}
          </ul>
          {data && <h1 className="title">{data.title}</h1>}
        </div>
      </div>
    </>
  );
};

export default BlogBreadCrumb;
