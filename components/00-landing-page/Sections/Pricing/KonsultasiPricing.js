import React from "react";

import PricingData from "../../../../data/elements/pricing.json";
import BasicPlan from "../../../Pricing/Plans/BasicPlan";
import StandardPlan from "../../../Pricing/Plans/StandardPlan";
import ExclusivePlan from "../../../Pricing/Plans/ExclusivePlan";
import { useAppContext } from "@/context/Context";

const KonsultasiPricing = ({ title, tag, col, position }) => {
  const { pricingThree, setPricingThree } = useAppContext();

  return (
    <>
      {PricingData &&
        PricingData.pricingThree.map((data, index) => (
          <div className="container" key={index}>
            <div className="row g-5">
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.basicPlan.map((item, innerIndex) => (
                  <BasicPlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.standardPlan.map((item, innerIndex) => (
                  <StandardPlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                  />
                ))}
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                {data.exclusivePlan.map((item, innerIndex) => (
                  <ExclusivePlan
                    {...item}
                    key={innerIndex}
                    item={item}
                    toggle={pricingThree}
                    styleType="three"
                    parentClass="style-2"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default KonsultasiPricing;
