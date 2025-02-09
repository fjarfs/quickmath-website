import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/blog/blog-card-01.jpg";
import bgImg from "../../public/images/bg/bg-image-10.jpg";

const TermsCondition = () => {
  return (
    <>
      <div className="rbt-overlay-page-wrapper">
        <div className="breadcrumb-image-container breadcrumb-style-max-width">
          <div className="breadcrumb-image-wrapper">
            <div className="breadcrumb-dark">
              <Image src={bgImg} alt="Education Images" />
            </div>
          </div>
          <div className="breadcrumb-content-top text-center">
            <h1 className="title">
              Syarat dan Ketentuan PT QUICKMATH EDUKASI INDONESIA (QUICKMATH)
            </h1>
            <p className="mb--20">
              <strong>
                Selamat datang di PT QUICKMATH EDUKASI INDONESIA (QUICKMATH)!
              </strong>{" "}
              <br />
              Dengan mengakses dan menggunakan layanan kami, Kamu setuju untuk
              mematuhi syarat dan ketentuan yang tercantum di bawah ini. Jika
              Kamu tidak setuju dengan syarat dan ketentuan ini, harap tidak
              melanjutkan penggunaan layanan kami.
            </p>
            <ul className="page-list">
              <li className="rbt-breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="icon-right">
                  <i className="feather-chevron-right"></i>
                </div>
              </li>
              <li className="rbt-breadcrumb-item active">Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>

        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <div className="rbt-article-content-wrapper">
            <div className="content">
              <h4>1. Definisi</h4>
              <ul>
                <li>
                  <strong>"Kami" atau "QUICKMATH"</strong> mengacu pada PT
                  QUICKMATH EDUKASI INDONESIA.
                </li>
                <li>
                  <strong>"Layanan"</strong> mengacu pada seluruh produk,
                  platform, dan aktivitas yang disediakan oleh QUICKMATH,
                  termasuk situs web, aplikasi mobile, dan materi pendidikan
                  yang terkait.
                </li>
                <li>
                  <strong>"Pengguna"</strong> merujuk pada individu atau entitas
                  yang mengakses atau menggunakan layanan kami.
                </li>
              </ul>
              <h4>2. Penggunaan Layanan</h4>
              <ul>
                <li>
                  Pengguna setuju untuk menggunakan layanan QUICKMATH hanya
                  untuk tujuan yang sah dan sesuai dengan ketentuan yang
                  berlaku.
                </li>
                <li>
                  Pengguna wajib memastikan bahwa informasi yang diberikan
                  kepada QUICKMATH adalah akurat dan terbaru.
                </li>
                <li>
                  Pengguna dilarang untuk menggunakan layanan kami dengan cara
                  yang dapat merusak, menonaktifkan, membebani, atau merusak
                  sistem kami.
                </li>
              </ul>

              <h4>3. Akses dan Keamanan Akun</h4>
              <ul>
                <li>
                  Pengguna yang mendaftar untuk layanan kami bertanggung jawab
                  untuk menjaga kerahasiaan akun dan kata sandi.
                </li>
                <li>
                  Pengguna wajib segera memberitahukan kami jika ada penggunaan
                  yang tidak sah atas akun mereka.
                </li>
              </ul>

              <h4>4. Konten dan Materi</h4>
              <ul>
                <li>
                  Semua konten yang disediakan oleh QUICKMATH, termasuk namun
                  tidak terbatas pada materi pendidikan, desain, teks, grafik,
                  logo, dan gambar, dilindungi oleh hak cipta dan tidak boleh
                  digunakan tanpa izin tertulis dari QUICKMATH.
                </li>
                <li>
                  Pengguna dapat mengakses dan menggunakan konten hanya untuk
                  keperluan pribadi dan non-komersial.
                </li>
              </ul>

              <h4>5. Pembayaran dan Biaya</h4>
              <ul>
                <li>
                  Beberapa layanan QUICKMATH mungkin memerlukan pembayaran atau
                  langganan. Pengguna setuju untuk membayar biaya yang berlaku
                  sesuai dengan pilihan layanan yang dipilih.
                </li>
                <li>
                  Pembayaran dapat dilakukan melalui metode pembayaran yang
                  disediakan oleh QUICKMATH.
                </li>
              </ul>

              <h4>6. Privasi dan Perlindungan Data</h4>
              <ul>
                <li>
                  Kami menghormati privasi Kamu. Kebijakan privasi kami
                  menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
                  melindungi data pribadi Kamu.
                </li>
                <li>
                  Dengan menggunakan layanan kami, Kamu setuju dengan
                  pengumpulan dan penggunaan data sesuai dengan kebijakan
                  privasi kami.
                </li>
              </ul>

              <h4>7. Pembatasan Tanggung Jawab</h4>
              <ul>
                <li>
                  QUICKMATH tidak bertanggung jawab atas kerugian atau kerusakan
                  yang timbul akibat penggunaan layanan, termasuk namun tidak
                  terbatas pada kerugian langsung, tidak langsung, atau
                  konsekuensial.
                </li>
                <li>
                  Kami tidak menjamin bahwa layanan kami akan selalu tersedia
                  atau bebas dari gangguan.
                </li>
              </ul>

              <h4>8. Perubahan Layanan</h4>
              <ul>
                <li>
                  QUICKMATH berhak untuk mengubah, menangguhkan, atau
                  menghentikan layanan atau fitur tertentu tanpa pemberitahuan
                  sebelumnya.
                </li>
                <li>
                  Kami juga berhak untuk memperbarui atau mengubah syarat dan
                  ketentuan ini sewaktu-waktu. Perubahan tersebut akan berlaku
                  segera setelah dipublikasikan di situs kami.
                </li>
              </ul>

              <h4>9. Tautan ke Situs Pihak Ketiga</h4>
              <ul>
                <li>
                  Layanan kami mungkin mengandung tautan ke situs web pihak
                  ketiga. Kami tidak bertanggung jawab atas konten atau
                  kebijakan privasi situs-situs tersebut.
                </li>
                <li>
                  Pengguna yang mengakses situs pihak ketiga dilakukan atas
                  risiko mereka sendiri.
                </li>
              </ul>

              <h4>10. Penyelesaian Sengketa</h4>
              <ul>
                <li>
                  Setiap sengketa yang timbul sehubungan dengan syarat dan
                  ketentuan ini akan diselesaikan melalui mediasi terlebih
                  dahulu.
                </li>
                <li>
                  Jika mediasi tidak berhasil, sengketa akan diselesaikan
                  melalui pengadilan yang berwenang di Indonesia.
                </li>
              </ul>

              <h4>11. Kebijakan Penghentian Layanan</h4>
              <ul>
                <li>
                  Kami berhak untuk menghentikan atau menangguhkan akses
                  pengguna ke layanan kami jika ditemukan pelanggaran terhadap
                  syarat dan ketentuan ini.
                </li>
              </ul>

              <h4>12. Ketentuan Lain</h4>
              <ul>
                <li>
                  Jika ada ketentuan dalam syarat dan ketentuan ini yang
                  dianggap tidak sah atau tidak dapat diterapkan, ketentuan
                  tersebut akan diubah atau dihapus tanpa mempengaruhi
                  keberlakuan ketentuan lainnya.
                </li>
                <li>
                  Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan
                  hukum yang berlaku di Indonesia.
                </li>
              </ul>

              <h4 class="contact-info">13. Kontak</h4>
              <p>
                Jika Kamu memiliki pertanyaan atau memerlukan klarifikasi lebih
                lanjut mengenai syarat dan ketentuan ini, silakan hubungi kami
                melalui:
              </p>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:admin@quickmath.id">admin@quickmath.id</a>
                </li>
                <li>Telepon: +6282133599318</li>
                <li>
                  Alamat: Grand Vilamas Estate, BE, Cinangka, Sawangan, Depok,
                  Jawa Barat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
