import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

const PromoListAll = ({ promo, start, end }) => {
  const { toggle } = useAppContext();

  return (
    <>
      <div
        className={`rbt-course-grid-column ${
          !toggle ? "active-list-view" : ""
        }`}
      >
        {promo.slice(start, end).map((data, index) => (
          <div className="course-grid-3" key={index}>
            <div
              className={`rbt-card variation-01 rbt-hover ${
                !toggle ? "card-list-2" : ""
              }`}
            >
              <div className="h-100">
                <div className="rbt-card-img">
                  <Link href={`/course-details/${data.id}`}>
                    <Image
                      className="h-100"
                      src={data.thumbnail}
                      width={362}
                      height={448}
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title fs-2">
                    <Link href={`/course-details/${data.id}`}>
                      {data.title}
                    </Link>
                  </h4>

                  <div className="mt-auto">
                    <div className="rbt-author-meta mb--10">
                      <div className="rbt-avater">
                        <i class="ri-calendar-2-line"></i>
                        <span className="fs-4 ml--10">Periode:</span>
                      </div>
                      <div className="rbt-author-info">
                        <span className="fs-4">{data.startDate}</span>
                        <span className="fs-4"> - {data.endDate}</span>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <i class="ri-discount-percent-fill" style={{ fontSize: "20px" }}></i>
                        <span className="current-price fs-4 ml--5">{data.voucherCode}</span>
                      </div>
                      <Link
                        className="rbt-btn-link"
                        href={`/course-details/${data.id}`}
                      >
                        Learn More<i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PromoListAll;
