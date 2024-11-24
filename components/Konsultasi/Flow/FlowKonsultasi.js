"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import CounterHead from "../../Counters/Counter-Head";

import CounterData from "../../../data/elements/counter.json";
import FlowData from "../../../data/landing-page/flowData.json";
import useFetch from "@/context/useFetch";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});

const FlowKonsultasi = ({ isDesc, head }) => {
  const { values } = useFetch(CounterData, "counterOne");

  return (
    <>
      {FlowData &&
        FlowData.dataOne.map((data, index) => (
          <div className="container" key={index}>
            {head === undefined ? (
              <CounterHead
                bgClass="bg-primary-opacity"
                mb="mb--40"
                tag={data.tag}
                title={data.title}
                subTitle={data.subTitle}
                desc={isDesc ? data.desc : ""}
              />
            ) : (
              ""
            )}
            <div className="row g-5 hanger-line">
              {data.body.map((item, innerIndex) => (
                <div
                  className={`${
                    item.top
                      ? "col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60"
                      : "col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60"
                  }`}
                  key={innerIndex}
                >
                  <div className="rbt-flipbox">
                    <div className="rbt-flipbox-wrap">
                      <div className="rbt-counterup rbt-flipbox-front rbt-flipbox-face rbt-hover-03 border-bottom-gradient">
                        <div className="top-circle-shape"></div>
                        <div className="inner">
                          <div className="rbt-round-icon">
                            <Image
                              src={item.img}
                              width={50}
                              height={50}
                              alt="Icons Images"
                            />
                          </div>
                          <div className="content">
                            <h5 className="title">{item.title}</h5>
                          </div>
                        </div>
                      </div>

                      <div className="rbt-flipbox-back rbt-flipbox-face inner">
                        <div className="p-5 text-white text-center">
                          <p>{item.desc}</p>
                        </div>
                      </div>
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

export default FlowKonsultasi;
