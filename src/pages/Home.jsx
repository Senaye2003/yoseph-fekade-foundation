import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import yosephPortrait from "../assets/img/yoseph-portrait.jpg";
import schoolEntrance from "../assets/img/school-entrance.jpg";
import schoolAerial from "../assets/img/school-aerial.jpg";
import "./Home.css";

const programs = [
  {
    icon: "🎓",
    title: "Education Support",
    text:
      "We provide financial assistance, school supplies, and educational resources to students who face barriers to continuing their education — keeping them in school and moving forward.",
    color: "#1e5c46",
    link: "/programs",
  },
  {
    icon: "🌱",
    title: "Youth Development",
    text:
      "Through mentorship, workshops, and leadership programs, we equip young people with the confidence, practical skills, and mindset to build successful futures.",
    color: "#a9822f",
    link: "/programs",
  },
  {
    icon: "🤝",
    title: "Community Support",
    text:
      "We partner with local communities to improve learning environments, strengthen families, and create long-term opportunities for development in Tigray and beyond.",
    color: "#3f6b73",
    link: "/programs",
  },
];

const stats = [
  { number: "2023", label: "Year founded" },
  { number: "3", label: "Active programs" },
  { number: "2", label: "Countries of operation" },
];

export default function Home() {
  return (
    <div className="home fade-in">

      {/* ── Hero ── */}
      <Container>
      <section className="home__hero">
        <div className="home__hero-left">
          <div className="home__badge">
            <img src={yosephPortrait} alt="Yoseph Fikade" className="home__badge-photo" />
            In loving memory of Yoseph Fikade
          </div>

          <h1 className="home__title">
            Turning grief into{" "}
            <span className="home__accent">generational change</span>.
          </h1>

          <p className="home__description">
            The Yoseph Fikade Foundation honors the memory of a bright,
            compassionate young man by expanding access to education and
            opportunity for youth in Ethiopia — the cause closest to his heart.
          </p>

          <div className="home__actions">
            <Link to="/donate" className="home__btn-primary btn-animate">
              Donate now
            </Link>
            <Link to="/about" className="home__btn-secondary btn-animate">
              Our story →
            </Link>
          </div>
        </div>

        <div className="home__stats-col">
          {stats.map((s) => (
            <div key={s.label} className="home__stat-card card-hover">
              <div className="home__stat-number">{s.number}</div>
              <div className="home__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      </Container>

      {/* ── Mission strip ── */}
      <div className="home__mission-strip fade-in">
        <p className="home__mission-text">
          "We believe education is one of the most powerful tools for changing
          lives. By supporting students, strengthening schools, and creating
          safe learning environments, we are building a brighter future for
          Ethiopia’s youth."
        </p>
        <span className="home__mission-attr">— Yoseph Fikade Foundation</span>
      </div>

      {/* ── Programs ── */}
      <Container>
      <section className="home__programs fade-in">
        <SectionHeader
          eyebrow="What we do"
          title="Our programs"
          subtitle="Three focus areas rooted in Yoseph’s values: knowledge, community, and compassion."
        />

        <div className="home__program-grid">
          {programs.map((p) => (
            <div key={p.title} className="home__program-card card-hover">
              <div
                className="home__program-bar"
                style={{ background: p.color }}
              />
              <div className="home__program-body">
                <span className="home__program-icon">{p.icon}</span>
                <div className="home__program-title">{p.title}</div>
                <p className="home__program-text">{p.text}</p>
                <Link to={p.link} className="home__program-link" style={{ color: p.color }}>
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      </Container>

      {/* ── Flagship project teaser ── */}
      <Container>
      <section className="home__flagship fade-in">
        <div className="home__flagship-media">
          <img src={schoolEntrance} alt="Yoseph Fikade Primary School entrance rendering" className="home__flagship-img home__flagship-img--main" />
          <img src={schoolAerial} alt="Aerial rendering of the school campus" className="home__flagship-img home__flagship-img--small" />
        </div>
        <div className="home__flagship-body">
          <p className="home__flagship-eyebrow">Our flagship project — active now</p>
          <h2 className="home__flagship-title">Yoseph Fikade Primary School</h2>
          <p className="home__flagship-text">
            The City Administration of Mekelle has granted the foundation 5,000
            square meters of land to build a modern, fully-equipped primary
            school — gifted entirely to the community in Yoseph's name.
            Classrooms, a library and lab zone, a cafe, and a playground are
            all part of the design now underway.
          </p>
          <Link to="/project" className="home__btn-primary btn-animate">
            See the project →
          </Link>
        </div>
      </section>
      </Container>

      {/* ── Donation CTA ── */}
      <section className="home__cta fade-in">
        <Container>
        <div className="home__cta-inner">
          <div className="home__cta-text">
            <h2 className="home__cta-title">Every contribution carries his legacy forward</h2>
            <p className="home__cta-sub">
              Your support funds school supplies, student scholarships, and
              community programs that create real, lasting change in Mekelle,
              Tigray, and beyond.
            </p>
          </div>
          <div className="home__cta-actions">
            <Link to="/donate" className="home__btn-primary btn-animate">
              Make a donation
            </Link>
            <Link to="/get-involved" className="home__btn-secondary btn-animate">
              Other ways to help
            </Link>
          </div>
        </div>
        </Container>
      </section>

    </div>
  );
}