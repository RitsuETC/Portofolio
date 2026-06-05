import SiteNavbar from "../components/SiteNavbar";
import "../components/NavbarFixed.css";
import "../styles/layout.css";

function Contact() {
  return (
    <div className="page">
      <SiteNavbar />
      <main className="page-content">
        <section className="content-card">
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">Gabung ke Discord kami lewat link berikut:</p>
          <a className="contact-link" href="https://discord.gg/g2yTb49ZmX" target="_blank" rel="noreferrer">
            https://discord.gg/g2yTb49ZmX
          </a>
        </section>
      </main>
    </div>
  );
}

export default Contact;
