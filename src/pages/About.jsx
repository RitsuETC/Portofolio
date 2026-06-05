import SiteNavbar from "../components/SiteNavbar";
import "../components/NavbarFixed.css";
import "../styles/layout.css";

function About() {
  return (
    <div className="page-shell">
      <SiteNavbar />
      <main className="container py-5">
        <section className="section-panel mb-4">
          <span className="section-tag">About</span>
          <h1 className="section-title mt-3">Tentang portfolio ini</h1>
          <p className="section-copy">
            Portfolio ini dibuat sebagai hasil akhir LKPD siswa. Fokus utamanya adalah
            menampilkan pengalaman belajar dan praktik kerja dalam bentuk website React
            yang modern, responsif, dan mudah dikembangkan.
          </p>
        </section>

        <section className="section-panel">
          <h2 className="h4 mb-3">Kontak & Komunitas</h2>
          <p className="text-secondary mb-3">Mari terhubung! Anda bisa bergabung ke komunitas kami di Discord melalui tautan di bawah ini:</p>
          <a href="https://discord.gg/g2yTb49ZmX" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            Join Discord
          </a>
        </section>
      </main>
    </div>
  );
}

export default About;
