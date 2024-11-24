import Link from "next/link";
import PromoListData from "../../../../data/landing-page/promoList.json";
import Image from "next/image";

import CourseDetails from "../../../../data/course-details/courseData.json";

const PromoList = () => {
  return (
    <>
      {CourseDetails &&
        CourseDetails.courseDetails.slice(0, 4).map((item, innerIndex) => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={innerIndex}>
              <div className="rbt-cat-box rbt-cat-box-1 variation-3 text-center">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href={`/course-filter-one-toggle/${item.category}`}>
                      <Image
                        src={item.cateBigImg}
                        width={304}
                        height={166}
                        alt="Category Images"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PromoList;
