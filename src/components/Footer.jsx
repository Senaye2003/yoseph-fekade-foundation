import Container from "./Container";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer fade-in">
      <Container>
        <div className="footer__grid">

          <div className="footer__about fade-in">
            <h3 className="footer__title">
              Yoseph Fikade Foundation
            </h3>

            <p className="footer__description">
              Honoring Yoseph’s memory through education, opportunity,
              and lasting community impact.
            </p>
          </div>

          <div className="footer__links fade-in">
            <h4 className="footer__heading">Quick Links</h4>

            <div className="footer__link-list">
              <Link to="/about" className="footer__link nav-link">About</Link>
              <Link to="/programs" className="footer__link nav-link">Our Work</Link>
              <Link to="/project" className="footer__link nav-link">Our Project</Link>
              <Link to="/get-involved" className="footer__link nav-link">Get Involved</Link>
              <Link to="/contact" className="footer__link nav-link">Contact</Link>
              <Link to="/donate" className="footer__link nav-link">Donate</Link>
            </div>
          </div>

          <div className="footer__contact fade-in">
            <h4 className="footer__heading">Contact</h4>

            <div className="footer__contact-info">
              <p>info@yosephfikadefoundation.com</p>
              <p>+251 978787927</p>
              <p>Mekelle, Tigray, Ethiopia</p>
              <p>Instagram: Yoseph Fikade Foundation</p>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} Yoseph Fikade Foundation. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}