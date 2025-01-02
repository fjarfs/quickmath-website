import { useEffect } from "react";
import sal from "sal.js";
import AboutSix from "../Abouts/About-Six";
import OurApps from "../Our-Apps/OurApps";

const ComingSoonComp = ({ AboutData, OurAppsData }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap2Top">
          <div className="container">
            <AboutSix
              AboutData={AboutData}
              btnClass="disabled"
              btnText="Coming Soon"
            />
          </div>
        </div>

        <div className="rbt-section-gap2Top">
          <OurApps OurAppsData={OurAppsData} start={1} end={2} />
        </div>
      </div>
    </>
  );
};

export default ComingSoonComp;
