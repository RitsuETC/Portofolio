import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/project", label: "Project" },
  { to: "/about", label: "About" },
];

function SiteNavbar() {
  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg portfolio-navbar">
        <div className="container">
          <NavLink className="navbar-brand brand-mark" to="/">
            ETC Portfolio
          </NavLink>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#portfolioNavbar"
            aria-controls="portfolioNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="portfolioNavbar">
            <div className="navbar-nav gap-lg-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-link nav-pill${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default SiteNavbar;
