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
                  <Link href={`/promo-details/${data.slug}`} className="position-relative" style={{ width: "100%", height: "104px" }}>
                    <Image
                      className="h-100"
                      src={data.image_url}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title fs-2">
                    <Link href={`/promo-details/${data.slug}`}>{data.name}</Link>
                  </h4>

                  <div className="mt-auto">
                    <div className="mb--20">
                      <div className="d-flex">
                        <div className="rbt-avater mr--10">
                          <i className="ri-calendar-2-fill"></i>
                          <span className="fs-4 ml--10">Periode:</span>
                        </div>
                        <div className="rbt-author-info">
                          <span className="fs-4 fw-bold">{data.start_date}</span>
                          <span className="fs-4 fw-bold">
                            {" "}
                            - {data.end_date}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="rbt-avater mr--10">
                          <i className="ri-discount-percent-fill"></i>
                          <span className="fs-4 ml--10">Kode Promo:</span>
                        </div>
                        <div className="rbt-author-info">
                          <span className="current-price fs-4 fw-bold">
                            {data.code}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <Link
                        className="rbt-btn-link"
                        href={`/promo-details/${data.slug}`}
                      >
                        Selengkapnya <i className="feather-arrow-right"></i>
                      </Link>
                      <Link className="rbt-btn btn-sm" href="/download-apps">
                        Gunakan
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
