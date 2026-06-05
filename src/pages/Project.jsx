import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiteNavbar from "../components/SiteNavbar";
import "../components/NavbarFixed.css";
import "../styles/layout.css";

function Project() {
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const projects = [
    {
      title: "Portfolio",
      tech: "React, Bootstrap, CSS",
      description: "Website portfolio dengan halaman home, about, project, dan experience CRUD.",
      link: "/",
    },
    {
      title: "E-Commerce ETC",
      tech: "React, Vercel",
      description: "Aplikasi toko online yang di-deploy di Vercel: https://etc-ecommerce-0.vercel.app/",
      link: "https://etc-ecommerce-0.vercel.app/",
    },
  ];

  useEffect(() => {
    let ignore = false;

    async function loadPosts() {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/posts?limit=3");
        if (!response.ok) {
          throw new Error("Gagal mengambil data API.");
        }

        const data = await response.json();
        if (!ignore) {
          setApiPosts(data.posts ?? []);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="page-shell">
      <SiteNavbar />
      <main className="container py-5">
        <section className="section-panel mb-4">
          <span className="section-tag">Showcase</span>
          <h1 className="section-title mt-3">Karya Pilihan</h1>
          <p className="section-copy">
            Kumpulan proyek yang merepresentasikan keahlian saya dalam 
            menyelesaikan masalah melalui teknologi web.
          </p>
        </section>

        <section className="row g-4 mb-5">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.title}>
              <article className="project-card h-100">
                <span className="project-tech">{project.tech}</span>
                <h2 className="h4 mt-3">
                  {project.link ? (
                    project.link.startsWith("http") ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                        {project.title}
                      </a>
                    ) : (
                      <Link to={project.link} className="text-decoration-none text-dark">
                        {project.title}
                      </Link>
                    )
                  ) : project.title}
                </h2>
                <p className="text-secondary mb-0 line-clamp-desc">{project.description}</p>
              </article>
            </div>
          ))}
        </section>

        <section className="section-panel">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
            <div>
              <span className="section-tag">API</span>
              <h2 className="h3 mt-3 mb-1">Data inspirasi dari API publik</h2>
              <p className="text-secondary mb-0">
                Sumber data: <code>https://dummyjson.com/posts?limit=3</code>
              </p>
            </div>
          </div>

          {loading && <div className="empty-state">Sedang memuat data dari API...</div>}
          {error && !loading && <div className="alert alert-danger mb-0">{error}</div>}

          {!loading && !error && apiPosts.length > 0 ? (
            <div className="row g-4">
              {apiPosts.map((post) => (
                <div className="col-md-4" key={post.id}>
                  <article className="api-card h-100">
                    <p className="small text-uppercase text-secondary mb-2">API Card</p>
                    <h3 className="h5">{post.title}</h3>
                    <p className="text-secondary mb-3 line-clamp-desc">{post.body}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <span className="badge rounded-pill text-bg-light border" key={tag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            !loading && !error && <div className="empty-state">Tidak ada data inspirasi ditemukan.</div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Project;
