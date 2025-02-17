import FlowKonsultasi from "../Abouts/FlowKonsultasi";
import FlowReferral from "../Abouts/FlowReferral";
import ServiceSix from "../Services/Service-Six";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import ReferralBanner from "./ReferralBanner";

const Referral = () => {
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-banner-area rbt-banner-1 variation-2">
          <ReferralBanner />
        </div>

        <div className="rbt-section-gap2">
          <ServiceSix />
        </div>

        <div className="rbt-section-gap2Bottom">
          <FlowReferral />
        </div>

        {/* <div className="rbt-section-gap2Bottom">
          <TestimonialFour />
        </div> */}
      </main>
    </>
  );
};

export default Referral;
