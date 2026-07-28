import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import schoolAerial from "../assets/img/school-aerial.jpg";
import schoolEntrance from "../assets/img/school-entrance.jpg";
import schoolCafe from "../assets/img/school-cafe.jpg";
import schoolFlags from "../assets/img/school-flags.jpg";
import schoolClassrooms from "../assets/img/school-classrooms.jpg";
import schoolLibrary from "../assets/img/school-library.jpg";
import schoolSitePlan from "../assets/img/school-site-plan.png";
import "./Project.css";

const facts = [
  { label: "Location", value: "Mekelle, Tigray, Ethiopia" },
  { label: "Land granted", value: "5,000 m²" },
  { label: "Granted by", value: "Mekelle City Administration" },
  { label: "Status", value: "Design complete — fundraising for construction" },
];

const zones = [
  { color: "#b9a3e0", label: "Library & laboratory zone" },
  { color: "#f0c496", label: "Classrooms" },
  { color: "#7a2e2e", label: "Toilets for classrooms" },
  { color: "#7a4a4a", label: "Administrative zone & cafe" },
  { color: "#2f6b46", label: "Playground & green area" },
  { color: "#d9d9d9", label: "Parking" },
];

const gallery = [
  { src: schoolEntrance, alt: "Main entrance and signage for Yoseph Fikade Primary School" },
  { src: schoolAerial, alt: "Aerial rendering of the school parking and grounds" },
  { src: schoolFlags, alt: "Walkway between classroom blocks with flags" },
  { src: schoolClassrooms, alt: "Colorful classroom and innovation zone signage" },
  { src: schoolCafe, alt: "Rendering of the on-site cafe" },
  { src: schoolLibrary, alt: "Library entrance rendering" },
];

export default function Project() {
  return (
    <section className="project fade-in">
      <div className="project__header">
        <p className="project__eyebrow">Our flagship project — active now</p>
        <h1 className="project__title">Yoseph Fikade Primary School</h1>
        <p className="project__intro">
          This is the project every donation directly supports: a modern,
          fully-equipped primary school built in Mekelle and gifted entirely
          to the public, so that Yoseph's name and spirit live on through the
          laughter, learning, and success of generations of students to come.
        </p>
      </div>

      <div className="project__facts">
        {facts.map((f) => (
          <div key={f.label} className="project__fact-card card-hover">
            <div className="project__fact-label">{f.label}</div>
            <div className="project__fact-value">{f.value}</div>
          </div>
        ))}
      </div>

      <div className="project__story">
        <h2 className="project__story-title">Why we're building it</h2>
        <p className="project__story-text">
          Following Yoseph's passing, his mother, Yeshi Gebrehawaryat, made a
          courageous decision: to channel her grief into a gift for the
          community. Thanks to the generous support of the local government,
          the City Administration of Mekelle Town granted the foundation
          5,000 square meters of land to bring that vision to life.
        </p>
        <p className="project__story-text">
          The Yoseph Fikade Primary School will not just be a building — it
          will be a sanctuary of knowledge, creativity, and community, giving
          local children a safe, inspiring, and fully-equipped place to
          learn.
        </p>
      </div>

      <div className="project__video-section">
        <SectionHeader
          eyebrow="Video walkthrough"
          title="Take a tour of the design"
          subtitle="A 3D fly-through of the planned Yoseph Fikade Primary School campus."
        />
        <div className="project__video-wrap card-hover">
          <video
            className="project__video"
            src="/video/school-design-flythrough.mp4"
            poster={schoolEntrance}
            controls
            playsInline
          />
        </div>
      </div>

      <div className="project__gallery-section">
        <SectionHeader
          eyebrow="Design renders"
          title="What we're building"
          subtitle="Early architectural renderings of the campus — classrooms, library and lab zone, cafe, and playground."
        />
        <div className="project__gallery">
          {gallery.map((g) => (
            <div key={g.src} className="project__gallery-item card-hover">
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="project__siteplan-section">
        <SectionHeader
          eyebrow="Site plan"
          title="The 5,000 m² campus layout"
          subtitle="Approved site plan showing how the granted land will be used."
        />
        <div className="project__siteplan-grid">
          <div className="project__siteplan-img-wrap card-hover">
            <img src={schoolSitePlan} alt="Approved site plan for Yoseph Fikade Primary School" />
          </div>
          <div className="project__legend">
            {zones.map((z) => (
              <div key={z.label} className="project__legend-item">
                <span className="project__legend-swatch" style={{ background: z.color }} />
                {z.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="project__cta fade-in">
        <div className="project__cta-text">
          <h2 className="project__cta-title">Help us break ground</h2>
          <p className="project__cta-sub">
            The land is granted and the design is ready — now we're raising
            the funds to build. Every contribution goes directly toward
            construction of the Yoseph Fikade Primary School.
          </p>
        </div>
        <div className="project__cta-actions">
          <Link to="/donate" className="project__btn-primary btn-animate">
            Support this project
          </Link>
          <Link to="/get-involved" className="project__btn-secondary btn-animate">
            Other ways to help
          </Link>
        </div>
      </div>
    </section>
  );
}
