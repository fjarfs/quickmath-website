import Link from "next/link";
import AboutData from "../../data/elements/about.json";

const FaqTwo = () => {
  return (
    <>
      {AboutData &&
        AboutData.faqAboutUs.map((data, index) => (
          <div className="row g-5 align-items-start" key={index}>
            <div className="col-lg-6">
              <div className="content">
                <h2>{data.title}</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-accordion-style accordion">
                <div className="rbt-accordion-style rbt-accordion-04 accordion">
                  <div className="accordion" id="accordionExamplec3">
                    {data.faqBody.map((item, innerIndex) => (
                      <div className="accordion-item card" key={innerIndex}>
                        <h2
                          className="accordion-header card-header"
                          id={item.heading}
                        >
                          <button
                            className={`accordion-button ${
                              !item.collapsed ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item.collapse}`}
                            aria-expanded={item.expanded}
                            aria-controls={item.collapse}
                          >
                            {item.accordionTitle}
                          </button>
                        </h2>
                        <div
                          id={item.collapse}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={item.heading}
                          data-bs-parent="#accordionExamplec3"
                        >
                          <div className="accordion-body card-body">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FaqTwo;
