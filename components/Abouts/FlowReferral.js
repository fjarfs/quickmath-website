import Image from "next/image";
import CounterHead from "../Counters/Counter-Head";

import ReferralData from "../../data/elements/referral.json";

const FlowReferral = () => {
  return (
    <>
      {ReferralData &&
        ReferralData.flow_section.map((data, index) => (
          <div className="container py-5 flow-container" key={index}>
            <div className="section-title text-center mb--50">
              <span className="subtitle bg-primary-opacity">{data.tag}</span>
              <h2 className="title">
                {data.title}
                <br /> {data.sub_title}
              </h2>
            </div>
            <div className="main-timeline-4 text-white">
              {data.body.map((item, innerIndex) => (
                <div
                  key={innerIndex}
                  className={
                    innerIndex % 2 === 0 ? "timeline-4 left-4" : "timeline-4 right-4"
                  }
                >
                  <div className="rbt-card variation-02">
                    <div className="rbt-card-img">
                      <Image
                        src={item.thumbnail}
                        width={450}
                        height={267}
                        priority
                        alt="Card image"
                      />
                    </div>
                    <div className="rbt-card-body">
                      <h5 className="rbt-card-title"> {item.title}</h5>

                      <p className="rbt-card-text">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default FlowReferral;
