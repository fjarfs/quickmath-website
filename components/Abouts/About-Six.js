import Image from "next/image";
import Link from "next/link";

const AboutSix = ({ AboutData, btnClass, btnText, imgClass }) => {
  return (
    <>
      {AboutData &&
        AboutData.map((data, index) => (
          <div className="row g-5 align-items-center" key={index}>
            <div className="col-lg-5">
              <div className="content">
                <center>
                <Image
                  className={imgClass}
                  src={data.img}
                  width={300}
                  height={300}
                  alt="About Images"
                />
                </center>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <div className="inner pl--50 pl_sm--5">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                  <p className="description mt--20">
                    <strong>{data.strong}</strong> {data.desc}
                  </p>
                  {
                    data.desc2 && (
                  <p className="description mt--20">
                  <strong>{data.strong}</strong> {data.desc2}
                  </p>

                    )
                  }
                  {
                    btnText && (
                   <div className="read-more-btn mt--40">
                    <Link className={`rbt-btn ${btnClass}`} href="#">
                      <span data-text={`${btnText}`}>{btnText}</span>
                    </Link>
                  </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AboutSix;
