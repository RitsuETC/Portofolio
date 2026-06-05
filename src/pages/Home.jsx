import { Link } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";
import "../components/NavbarFixed.css";
import "../styles/layout.css";

const checklist = [
  "Keahlian dalam React.js & Modern CSS",
  "Pengembangan Website Responsif",
  "Integrasi API & Layanan Eksternal",
  "Optimasi Performa & Aksesibilitas",
  "Manajemen State Aplikasi Kompleks",
];

const highlights = [
  { value: "2", label: "Tahun Belajar Coding" },
  { value: "1", label: "Project Selesai" },
  { value: "API", label: "Data Driven Apps" },
];

function Home() {
  return (
    <div className="page-shell">
      <SiteNavbar />
      <main>
        <section className="hero-section">
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="section-tag">Software Developer</span>
                <h1 className="display-5 display-md-4 fw-bold mt-3 mb-3">
                  Halo, Saya Zaidan. <br />
                  Membangun Emerge Tech Circle adalah jalanku.
                </h1>
                <p className="lead text-secondary mb-4">
                  Saya adalah seorang pengembang antarmuka web yang berfokus pada 
                  menciptakan pengalaman pengguna yang bermakna. Menggabungkan estetika 
                  desain dengan kode yang bersih dan efisien.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link className="btn btn-dark btn-lg" to="/experience">
                    Lihat Pengalaman
                  </Link>
                  <Link className="btn btn-outline-dark btn-lg" to="/project">
                    Koleksi Project
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-image-wrapper mb-4">
                  <img 
                    src="/gambar/Logo ETC clear.png" 
                    alt="Zaidan Portfolio" 
                    className="img-fluid rounded-5 shadow-lg main-hero-img"
                  />
                </div>
                <div className="hero-card card border-0 shadow-lg">
                  <div className="card-body p-4 p-lg-5">
                    <p className="text-uppercase text-secondary small mb-3">Ringkasan LKPD</p>
                    <div className="row g-3">
                      {highlights.map((item) => (
                        <div className="col-sm-4" key={item.label}>
                          <div className="stat-card h-100">
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr className="my-4" />
                    <ul className="feature-list">
                      {checklist.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
