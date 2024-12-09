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
                  <Link href={`/promo-details/${data.id}`}>
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
                    <Link href={`/promo-details/${data.id}`}>{data.title}</Link>
                  </h4>

                  <div className="mt-auto">
                    <div className="mb--20">
                      <div className="d-flex">
                        <div className="rbt-avater mr--10">
                          <i class="ri-calendar-2-fill"></i>
                          <span className="fs-4 ml--10">Periode:</span>
                        </div>
                        <div className="rbt-author-info">
                          <span className="fs-4 fw-bold">{data.startDate}</span>
                          <span className="fs-4 fw-bold"> - {data.endDate}</span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="rbt-avater mr--10">
                          <i class="ri-discount-percent-fill"></i>
                          <span className="fs-4 ml--10">Kode Promo:</span>
                        </div>
                        <div className="rbt-author-info">
                          <span className="current-price fs-4 fw-bold">
                            {data.voucherCode}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <Link
                        className="rbt-btn-link"
                        href={`/promo-details/${data.id}`}
                      >
                        Lihat Detail<i className="feather-arrow-right"></i>
                      </Link>
                      <Link className="rbt-btn btn-sm" href="#">
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
