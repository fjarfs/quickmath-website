import CaraKlaimPromo from "./Promo-Section/CaraKlaim-Promo";
import PromoDetailBanner from "./Promo-Section/Promo-Banner";
import PromoTnc from "./Promo-Section/Promo-Tnc";
import SidebarPromo from "./Promo-Section/Sidebar-Promo";

const PromoDetails = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="course-details-content">
          <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
          <PromoDetailBanner
                bannerImg={checkMatchCourses.image_url}
                title={checkMatchCourses.slug}
                shortDesc={checkMatchCourses.desc}
              />
          </div>

          {/* {checkMatchCourses &&
            checkMatchCourses.promoTnc.map((data, index) => (
              <PromoTnc {...data} key={index} checkMatchCourses={data} />
            ))} */}

          {/* {checkMatchCourses &&
            checkMatchCourses.stepToClaimPromo.map((data, index) => (
              <CaraKlaimPromo {...data} key={index} checkMatchCourses={data} />
            ))} */}

          {/* <div
            className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
            id="details"
          >
            <div className="row g-5">
              {checkMatchCourses &&
                checkMatchCourses.courseRequirement.map((data, index) => (
                  <Requirements
                    {...data}
                    key={index}
                    checkMatchCourses={data}
                  />
                ))}
            </div>
          </div> */}
        </div>
      </div>

      <div className="col-lg-4">
        <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
          <div className="inner">
            <SidebarPromo
              checkMatchCourses={checkMatchCourses && checkMatchCourses}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoDetails;
