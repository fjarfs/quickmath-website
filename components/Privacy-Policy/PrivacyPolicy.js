import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/blog/blog-card-01.jpg";
import bgImg from "../../public/images/bg/bg-image-10.jpg";

const PrivacyPolicy = () => {
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
            <h1 className="title">Kebijakan Privasi</h1>
            <p className="mb--20">Terakhir diperbarui: 26 Desember 2024</p>
            <ul className="page-list">
              <li className="rbt-breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="icon-right">
                  <i className="feather-chevron-right"></i>
                </div>
              </li>
              <li className="rbt-breadcrumb-item active">Kebijakan Privasi</li>
            </ul>
          </div>
        </div>

        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <div className="rbt-article-content-wrapper">
            <div className="content">
              <h4>Selamat Datang di Kebijakan Privasi PT QUICKMATH EDUKASI INDONESIA (QUICKMATH)</h4>
              <p>
                Kebijakan Privasi ini menjelaskan kebijakan dan prosedur Kami
                terkait pengumpulan, penggunaan, dan pengungkapan informasi Kamu
                saat Kamu menggunakan Layanan, serta menjelaskan hak privasi
                Kamu dan bagaimana hukum melindungi Kamu.
              </p>
              <p>
                Kami menggunakan Data Pribadi Kamu untuk menyediakan dan
                meningkatkan Layanan. Dengan menggunakan Layanan, Kamu
                menyetujui pengumpulan dan penggunaan informasi sesuai dengan
                Kebijakan Privasi ini. Kebijakan Privasi ini dibuat dengan
                bantuan{" "}
                <a
                  href="https://www.termsfeed.com/privacy-policy-generator/"
                  target="_blank"
                >
                  Privacy Policy Generator
                </a>
                .
              </p>
              <h4>Interpretasi dan Definisi</h4>
              <h5>Interpretasi</h5>
              <p>
                Kata-kata yang huruf pertamanya menggunakan huruf kapital
                memiliki arti sebagaimana didefinisikan di bawah kondisi
                berikut. Definisi berikut memiliki arti yang sama baik dalam
                bentuk tunggal maupun jamak.
              </p>

              <h5>Definisi</h5>
              <p>Untuk tujuan Kebijakan Privasi ini:</p>
              <ul>
                <li>
                  <p>
                    <strong>Akun</strong> berarti akun unik yang dibuat untuk
                    Kamu guna mengakses Layanan kami atau bagian dari Layanan
                    kami.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Afiliasi</strong> berarti entitas yang
                    mengendalikan, dikendalikan oleh, atau berada di bawah
                    kendali bersama dengan pihak lain, di mana "kendali" berarti
                    kepemilikan 50% atau lebih saham, kepentingan ekuitas, atau
                    sekuritas lain yang memiliki hak suara untuk memilih
                    direktur atau otoritas pengelola lainnya.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Aplikasi</strong> mengacu pada QuickMath, program
                    perangkat lunak yang disediakan oleh Perusahaan.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Perusahaan</strong> (disebut juga sebagai
                    "Perusahaan", "Kami", "Kita", atau "Milik Kami" dalam
                    Perjanjian ini) mengacu pada PT QUICKMATH EDUKASI INDONESIA,
                    Grand Vilamas Estate, B3, Cinangka, Sawangan, Depok, Jawa
                    Barat.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cookie</strong> adalah file kecil yang ditempatkan
                    pada komputer, perangkat seluler, atau perangkat lain Kamu
                    oleh situs web, yang berisi detail riwayat penelusuran Kamu
                    di situs web tersebut untuk berbagai kegunaan.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Negara</strong> merujuk pada: Indonesia
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Perangkat</strong> berarti perangkat apa pun yang
                    dapat mengakses Layanan seperti komputer, ponsel, atau
                    tablet digital.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Data Pribadi</strong> adalah informasi apa pun yang
                    berkaitan dengan individu yang diidentifikasi atau dapat
                    diidentifikasi.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Layanan</strong> mengacu pada Aplikasi atau Situs
                    Web atau keduanya.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Penyedia Layanan</strong> berarti setiap orang atau
                    badan hukum yang memproses data atas nama Perusahaan. Ini
                    merujuk pada perusahaan pihak ketiga atau individu yang
                    dipekerjakan oleh Perusahaan untuk memfasilitasi Layanan,
                    menyediakan Layanan atas nama Perusahaan, melakukan layanan
                    terkait dengan Layanan, atau membantu Perusahaan
                    menganalisis cara Layanan digunakan.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Layanan Media Sosial Pihak Ketiga</strong> merujuk
                    pada situs web atau jejaring sosial apa pun melalui mana
                    Pengguna dapat masuk atau membuat akun untuk menggunakan
                    Layanan.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Data Penggunaan</strong> merujuk pada data yang
                    dikumpulkan secara otomatis, baik yang dihasilkan oleh
                    penggunaan Layanan atau dari infrastruktur Layanan itu
                    sendiri (misalnya, durasi kunjungan halaman).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Situs Web</strong> mengacu pada QuickMath, yang
                    dapat diakses dari{" "}
                    <a
                      href="https://quickmath.id"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      https://quickmath.id
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Kamu</strong> berarti individu yang mengakses atau
                    menggunakan Layanan, atau perusahaan, atau badan hukum lain
                    atas nama individu tersebut mengakses atau menggunakan
                    Layanan, sebagaimana berlaku.
                  </p>
                </li>
              </ul>

              <h4>Pengumpulan dan Penggunaan Data Pribadi Kamu</h4>
              <h5>Jenis Data yang Dikumpulkan</h5>
              <h6>Data Pribadi</h6>
              <p>
                Saat menggunakan Layanan Kami, Kami mungkin meminta Kamu untuk
                memberikan informasi pribadi tertentu yang dapat digunakan untuk
                menghubungi atau mengidentifikasi Kamu. Informasi pribadi dapat
                mencakup, tetapi tidak terbatas pada:
              </p>
              <ul>
                <li>Alamat email</li>
                <li>Nama depan dan nama belakang</li>
                <li>Nomor telepon</li>
                <li>Data Penggunaan</li>
              </ul>

              <h6>Data Penggunaan</h6>
              <p>
                Data Penggunaan dikumpulkan secara otomatis saat menggunakan
                Layanan.
              </p>
              <p>
                Data Penggunaan dapat mencakup informasi seperti alamat Protokol
                Internet perangkat Kamu (misalnya, alamat IP), jenis browser,
                versi browser, halaman Layanan kami yang Kamu kunjungi, waktu
                dan tanggal kunjungan Kamu, waktu yang dihabiskan di
                halaman-halaman tersebut, pengenal perangkat unik, dan data
                diagnostik lainnya.
              </p>
              <p>
                Ketika Kamu mengakses Layanan melalui perangkat seluler, Kami
                mungkin mengumpulkan informasi tertentu secara otomatis,
                termasuk tetapi tidak terbatas pada jenis perangkat seluler yang
                Kamu gunakan, ID unik perangkat seluler Kamu, alamat IP
                perangkat seluler Kamu, sistem operasi perangkat seluler Kamu,
                jenis browser Internet seluler yang Kamu gunakan, pengenal
                perangkat unik, dan data diagnostik lainnya.
              </p>

              <h5>Informasi dari Layanan Media Sosial Pihak Ketiga</h5>
              <p>
                Perusahaan memungkinkan Kamu untuk membuat akun dan masuk untuk
                menggunakan Layanan melalui Layanan Media Sosial Pihak Ketiga
                berikut:
              </p>
              <ul>
                <li>Google</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
              <p>
                Jika Kamu memutuskan untuk mendaftar melalui atau memberikan
                kami akses ke Layanan Media Sosial Pihak Ketiga, Kami dapat
                mengumpulkan Data Pribadi yang sudah terkait dengan akun Layanan
                Media Sosial Pihak Ketiga Kamu, seperti nama Kamu, alamat email
                Kamu, aktivitas Kamu, atau daftar kontak Kamu.
              </p>

              <h5>Informasi yang Dikumpulkan saat Menggunakan Aplikasi</h5>
              <p>
                Saat menggunakan Aplikasi Kami, untuk menyediakan fitur-fitur
                Aplikasi Kami, Kami dapat mengumpulkan, dengan izin Kamu
                sebelumnya:
              </p>
              <ul>
                <li>
                  Gambar dan informasi lain dari kamera dan pustaka foto
                  perangkat Kamu
                </li>
              </ul>
              <p>
                Kami menggunakan informasi ini untuk menyediakan fitur-fitur
                Layanan Kami, untuk meningkatkan dan menyesuaikan Layanan Kami.
                Informasi tersebut dapat diunggah ke server Perusahaan dan/atau
                server Penyedia Layanan, atau dapat disimpan hanya di perangkat
                Kamu.
              </p>
              <p>
                Kamu dapat mengaktifkan atau menonaktifkan akses ke informasi
                ini kapan saja melalui pengaturan perangkat Kamu.
              </p>

              <h5>Teknologi Pelacakan dan Cookie</h5>
              <p>
                Kami menggunakan Cookie dan teknologi pelacakan serupa untuk
                melacak aktivitas pada Layanan Kami dan menyimpan informasi
                tertentu. Teknologi pelacakan yang digunakan termasuk beacon,
                tag, dan skrip untuk mengumpulkan dan melacak informasi serta
                untuk meningkatkan dan menganalisis Layanan Kami. Teknologi yang
                Kami gunakan dapat mencakup:
              </p>
              <ul>
                <li>
                  <strong>Cookie atau Cookie Browser.</strong> Cookie adalah
                  file kecil yang ditempatkan di perangkat Kamu. Kamu dapat
                  mengatur browser Kamu untuk menolak semua Cookie atau memberi
                  tahu Kamu ketika Cookie dikirim. Namun, jika Kamu tidak
                  menerima Cookie, Kamu mungkin tidak dapat menggunakan beberapa
                  bagian dari Layanan Kami.
                </li>
                <li>
                  <strong>Web Beacon.</strong> Bagian tertentu dari Layanan Kami
                  dan email kami mungkin berisi file elektronik kecil yang
                  dikenal sebagai web beacon (juga disebut clear gifs, tag
                  piksel, dan single-pixel gifs) yang memungkinkan Perusahaan,
                  misalnya, menghitung pengguna yang telah mengunjungi halaman
                  tersebut atau membuka email dan untuk statistik terkait
                  lainnya.
                </li>
              </ul>
              <p>
                Cookie dapat berupa Cookie "Persisten" atau "Sesi". Cookie
                Persisten tetap ada di komputer pribadi atau perangkat seluler
                Kamu saat Kamu offline, sedangkan Cookie Sesi dihapus segera
                setelah Kamu menutup browser web Kamu.
              </p>

              <h4>Penggunaan Data Pribadi Kamu</h4>
              <p>
                Perusahaan dapat menggunakan Data Pribadi Kamu untuk tujuan
                berikut:
              </p>
              <ul>
                <li>
                  <strong>Untuk menyediakan dan memelihara Layanan Kami</strong>
                  , termasuk untuk memantau penggunaan Layanan Kami.
                </li>
                <li>
                  <strong>Untuk mengelola Akun Kamu:</strong> untuk mengelola
                  pendaftaran Kamu sebagai pengguna Layanan. Data Pribadi yang
                  Kamu berikan dapat memberi Kamu akses ke berbagai fitur
                  Layanan yang tersedia untuk Kamu sebagai pengguna terdaftar.
                </li>
                <li>
                  <strong>Untuk melaksanakan kontrak:</strong> pengembangan,
                  kepatuhan, dan pelaksanaan kontrak pembelian untuk produk,
                  barang, atau layanan yang telah Kamu beli atau kontrak lainnya
                  dengan Kami melalui Layanan.
                </li>
                <li>
                  <strong>Untuk menghubungi Kamu:</strong> Untuk menghubungi
                  Kamu melalui email, panggilan telepon, SMS, atau bentuk
                  komunikasi elektronik lainnya terkait pembaruan atau
                  komunikasi informatif mengenai fitur, produk, atau layanan
                  yang Kamu gunakan.
                </li>
                <li>
                  <strong>
                    Untuk memberikan Kamu berita atau penawaran khusus:
                  </strong>{" "}
                  Memberikan Kamu informasi tentang produk atau layanan yang
                  mirip dengan yang telah Kamu beli atau tanyakan, kecuali jika
                  Kamu memilih untuk tidak menerima informasi tersebut.
                </li>
              </ul>

              <h4>Penyimpanan Data Pribadi Kamu</h4>
              <p>
                Perusahaan akan menyimpan Data Pribadi Kamu hanya selama
                diperlukan untuk tujuan yang tercantum dalam Kebijakan Privasi
                ini. Kami akan menyimpan dan menggunakan Data Pribadi Kamu
                sejauh diperlukan untuk memenuhi kewajiban hukum kami (misalnya,
                jika kami diharuskan menyimpan data Kamu untuk mematuhi hukum
                yang berlaku), menyelesaikan sengketa, dan menegakkan perjanjian
                dan kebijakan hukum kami.
              </p>
              <p>
                Perusahaan juga akan menyimpan Data Penggunaan untuk tujuan
                analisis internal. Data Penggunaan umumnya disimpan untuk jangka
                waktu yang lebih singkat, kecuali jika data ini digunakan untuk
                memperkuat keamanan atau meningkatkan fungsi Layanan Kami, atau
                jika kami secara hukum diwajibkan untuk menyimpan data ini untuk
                jangka waktu yang lebih lama.
              </p>

              <h4>Transfer Data Pribadi Kamu</h4>
              <p>
                Informasi Kamu, termasuk Data Pribadi, diproses di kantor
                operasi Perusahaan dan di tempat lain di mana pihak-pihak yang
                terlibat dalam pemrosesan berada. Ini berarti bahwa informasi
                tersebut dapat ditransfer ke — dan disimpan di — komputer yang
                berlokasi di luar negara bagian, provinsi, negara, atau
                yurisdiksi pemerintah Kamu di mana undang-undang perlindungan
                data dapat berbeda dari yurisdiksi Kamu.
              </p>
              <p>
                Persetujuan Kamu terhadap Kebijakan Privasi ini diikuti dengan
                pengiriman informasi tersebut merupakan persetujuan Kamu
                terhadap transfer tersebut.
              </p>
              <p>
                Perusahaan akan mengambil semua langkah yang wajar untuk
                memastikan bahwa data Kamu diperlakukan dengan aman dan sesuai
                dengan Kebijakan Privasi ini dan bahwa tidak ada transfer Data
                Pribadi Kamu yang akan dilakukan ke suatu organisasi atau negara
                kecuali ada kontrol yang memadai di tempat termasuk keamanan
                data Kamu dan informasi pribadi lainnya.
              </p>

              <h4>Penghapusan Data Pribadi Kamu</h4>
              <p>
                Kamu memiliki hak untuk menghapus atau meminta bantuan Kami
                dalam menghapus Data Pribadi yang telah Kami kumpulkan tentang
                Kamu.
              </p>
              <p>
                Layanan Kami dapat memberi Kamu kemampuan untuk menghapus
                informasi tertentu tentang Kamu dari dalam Layanan.
              </p>
              <p>
                Kamu dapat memperbarui, mengubah, atau menghapus informasi Kamu
                kapan saja dengan masuk ke Akun Kamu, jika Kamu memilikinya, dan
                mengunjungi bagian pengaturan akun yang memungkinkan Kamu untuk
                mengelola informasi pribadi Kamu. Kamu juga dapat menghubungi
                Kami untuk meminta akses, mengoreksi, atau menghapus informasi
                pribadi apa pun yang telah Kamu berikan kepada Kami.
              </p>
              <p>
                Namun, harap diperhatikan bahwa Kami mungkin perlu menyimpan
                informasi tertentu jika kami memiliki kewajiban hukum atau dasar
                hukum untuk melakukannya.
              </p>

              <h4>Pengungkapan Data Pribadi Kamu</h4>
              <h5>Transaksi Bisnis</h5>
              <p>
                Jika Perusahaan terlibat dalam merger, akuisisi, atau penjualan
                aset, Data Pribadi Kamu dapat dipindahkan. Kami akan memberikan
                pemberitahuan sebelum Data Pribadi Kamu dipindahkan dan tunduk
                pada Kebijakan Privasi yang berbeda.
              </p>

              <h5>Penegakan Hukum</h5>
              <p>
                Dalam keadaan tertentu, Perusahaan mungkin diminta untuk
                mengungkapkan Data Pribadi Kamu jika diwajibkan oleh hukum atau
                sebagai tanggapan atas permintaan yang sah oleh otoritas publik
                (misalnya pengadilan atau lembaga pemerintah).
              </p>

              <h5>Kebutuhan Hukum Lainnya</h5>
              <p>
                Perusahaan dapat mengungkapkan Data Pribadi Kamu dengan itikad
                baik bahwa tindakan tersebut diperlukan untuk:
              </p>
              <ul>
                <li>Mematuhi kewajiban hukum</li>
                <li>
                  Melindungi dan mempertahankan hak atau properti Perusahaan
                </li>
                <li>
                  Mencegah atau menyelidiki kemungkinan pelanggaran terkait
                  Layanan
                </li>
                <li>
                  Melindungi keselamatan pribadi Pengguna Layanan atau publik
                </li>
                <li>Melindungi dari tanggung jawab hukum</li>
              </ul>

              <h4>Keamanan Data Pribadi Kamu</h4>
              <p>
                Keamanan Data Pribadi Kamu penting bagi Kami, tetapi ingat bahwa
                tidak ada metode transmisi melalui Internet, atau metode
                penyimpanan elektronik yang 100% aman. Meskipun Kami berusaha
                menggunakan cara yang dapat diterima secara komersial untuk
                melindungi Data Pribadi Kamu, Kami tidak dapat menjamin keamanan
                mutlaknya.
              </p>

              <h4>Privasi Anak-Anak</h4>
              <p>
                Layanan Kami tidak ditujukan untuk siapa pun di bawah usia 13
                tahun. Kami tidak dengan sengaja mengumpulkan informasi yang
                dapat diidentifikasi secara pribadi dari siapa pun di bawah usia
                13 tahun. Jika Kamu adalah orang tua atau wali dan Kamu
                mengetahui bahwa anak Kamu telah memberikan Data Pribadi kepada
                Kami, harap hubungi Kami. Jika Kami mengetahui bahwa Kami telah
                mengumpulkan Data Pribadi dari siapa pun di bawah usia 13 tahun
                tanpa verifikasi persetujuan orang tua, Kami akan mengambil
                langkah untuk menghapus informasi tersebut dari server Kami.
              </p>
              <p>
                Jika Kami harus mengandalkan persetujuan sebagai dasar hukum
                untuk memproses informasi Kamu dan negara Kamu memerlukan
                persetujuan dari orang tua, Kami mungkin memerlukan persetujuan
                orang tua Kamu sebelum Kami mengumpulkan dan menggunakan
                informasi tersebut.
              </p>

              <h4>Tautan ke Situs Web Lain</h4>
              <p>
                Layanan Kami mungkin berisi tautan ke situs web lain yang tidak
                dioperasikan oleh Kami. Jika Kamu mengklik tautan pihak ketiga,
                Kamu akan diarahkan ke situs pihak ketiga tersebut. Kami sangat
                menyarankan Kamu untuk meninjau Kebijakan Privasi setiap situs
                yang Kamu kunjungi.
              </p>
              <p>
                Kami tidak memiliki kendali atas dan tidak bertanggung jawab
                atas konten, kebijakan privasi, atau praktik dari situs atau
                layanan pihak ketiga mana pun.
              </p>

              <h4>Perubahan pada Kebijakan Privasi ini</h4>
              <p>
                Kami dapat memperbarui Kebijakan Privasi Kami dari waktu ke
                waktu. Kami akan memberi tahu Kamu tentang setiap perubahan
                dengan memposting Kebijakan Privasi baru di halaman ini.
              </p>
              <p>
                Kami akan memberi tahu Kamu melalui email dan/atau pemberitahuan
                yang mencolok di Layanan Kami, sebelum perubahan menjadi efektif
                dan memperbarui tanggal "Terakhir diperbarui" di bagian atas
                Kebijakan Privasi ini.
              </p>
              <p>
                Kamu disarankan untuk meninjau Kebijakan Privasi ini secara
                berkala untuk mengetahui perubahan apa pun. Perubahan pada
                Kebijakan Privasi ini berlaku saat diposting di halaman ini.
              </p>

              <h4>Hubungi Kami</h4>
              <p>
                Jika Kamu memiliki pertanyaan tentang Kebijakan Privasi ini,
                Kamu dapat menghubungi kami:
              </p>
              <ul>
                <li>Melalui email: admin@quickmath.id</li>
                <li>
                  Dengan mengunjungi halaman ini di situs web kami:{" "}
                  <a
                    href="https://quickmath.id/contact"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    https://quickmath.id/contact
                  </a>
                </li>
                <li>Melalui nomor telepon: +6282133599318</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
