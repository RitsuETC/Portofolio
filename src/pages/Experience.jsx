import React from "react";
import SiteNavbar from "../components/SiteNavbar";
import StudentCard from "../components/StudentCard";
import "../components/NavbarFixed.css";
import "../styles/layout.css";

const initialExperiences = [];

function Experience() {
  return (
    <div className="page-shell">
      <SiteNavbar />
      <main className="container py-5">
        <section className="section-panel mb-4">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <span className="section-tag">Career Journey</span>
              <h1 className="section-title mt-3">Rekam Jejak & Pengalaman</h1>
              <p className="section-copy">
                Saat ini masih belum tersedia konten terkait
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {["PKL", "Freelance", "Lomba", "Project"].map((item) => (
                  <div className="col-6" key={item}>
                    <div className="mini-info-card">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Daftar Pengalaman (Read-Only) */}
        <section className="row g-4">
          {initialExperiences.length ? (
            initialExperiences.map((item) => (
              <div className="col-md-6" key={item.id}>
                <StudentCard
                  kategori={item.kategori}
                  judul={item.judul}
                  instansi={item.instansi}
                  periode={item.periode}
                  deskripsi={item.deskripsi}
                  // Props onEdit dan onDelete dihapus agar tombol tidak berfungsi/muncul
                />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="empty-state">
                Belum ada rekam jejak atau pengalaman yang ditambahkan.
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Experience;
