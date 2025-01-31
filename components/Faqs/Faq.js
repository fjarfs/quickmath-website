import React from "react";

import AccordionData from "../../data/elements/accordion.json";
import FaqTwo from "./Faq-Two";
import ContactUs from "../Contacts/ContactUs";

const Faq = () => {
  return (
    <>
      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap2Bottom">
        <div className="container">
          <FaqTwo />
        </div>
      </div>

      <div className="rbt-callto-action-area">
        <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75 ">
          <ContactUs btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
        </div>
      </div>
    </>
  );
};

export default Faq;
