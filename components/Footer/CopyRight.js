import Link from "next/link";
import Separator from "../Common/Separator";

const CopyRight = () => {
  return (
    <>
      <Separator />
      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">
              © PT. QuickMath Edukasi Indonesia, 2025
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                <li>
                  <Link href="/terms-conditions">Syarat & Ketentuan</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Kebijakan Privasi</Link>
                </li>
                <li>
                  <Link href="#">Daftar & Masuk</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
