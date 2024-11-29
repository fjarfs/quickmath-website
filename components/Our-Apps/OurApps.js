import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";

const OurApps = () => {
  return (
    <>
      <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h1 className="title">
                    Download our mobile app, <br /> start learning today
                  </h1>
                  <p>Includes all Course && Features</p>
                  <div className="rbt-button-group justify-content-center">
                    <Link className="rbt-btn btn-gradient" href="#">
                      Get Bundle
                    </Link>
                    <Link className="rbt-btn btn-border" href="#">
                      See Features
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurApps;
