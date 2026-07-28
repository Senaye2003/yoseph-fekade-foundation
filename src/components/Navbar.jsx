import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import yosephPortrait from "../assets/img/yoseph-portrait.jpg";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Our Work" },
  { to: "/project", label: "Our Project" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="navbar">
      <Container>
        <div className="navbar__inner">

          <Link to="/" className="navbar__brand">
            <div className="navbar__logo">
              <img src={yosephPortrait} alt="Yoseph Fikade" className="navbar__logo-img" />
            </div>
            <div className="navbar__brand-text">
              <div className="navbar__title">Yoseph Fikade Foundation</div>
              <div className="navbar__subtitle">In loving memory</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__nav">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "navbar__link navbar__link--active" : "navbar__link"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__right">
            <Link to="/donate" className="navbar__donate">Donate</Link>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger${open ? " navbar__hamburger--open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile-menu">
          <Container>
            <nav className="navbar__mobile-nav">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__mobile-link navbar__mobile-link--active"
                      : "navbar__mobile-link"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/donate" className="navbar__mobile-donate">
                Donate now →
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
