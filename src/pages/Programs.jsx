import idpBriefing from "../assets/img/idp-briefing.jpg";
import idpDistribution from "../assets/img/idp-distribution.jpg";
import idpFamilies from "../assets/img/idp-families.jpg";
import idpShelterVisit from "../assets/img/idp-shelter-visit.jpg";
import idpShelterCorridor from "../assets/img/idp-shelter-corridor.jpg";
import "./Programs.css";

const stats = [
  { number: "2023", label: "Year founded" },
  { number: "3", label: "Active programs" },
  { number: "2", label: "Countries of operation" },
  { number: "∞", label: "Lives we aim to reach" },
];

const programs = [
  {
    title: "Education Support",
    color: "#1c3a5e",
    text:
      "We provide financial assistance, school supplies, and educational resources to students who face barriers to continuing their education. Our goal is to help students stay in school and pursue their academic dreams.",
  },
  {
    title: "Youth Development",
    color: "#a9822f",
    text:
      "Through mentorship, workshops, and leadership programs, we help young people develop confidence, practical skills, and the mindset needed to build successful futures.",
  },
  {
    title: "Community Support",
    color: "#3f6b73",
    text:
      "We partner with local communities to support initiatives that improve learning environments, strengthen families, and create opportunities for long-term development.",
  },
];

const activityPhotos = [
  { src: idpBriefing, alt: "Foundation team briefing families at the Hope IDP center" },
  { src: idpDistribution, alt: "Distributing food and supplies at the Hope IDP center" },
  { src: idpFamilies, alt: "Displaced families gathered for lunch at the Hope IDP center" },
  { src: idpShelterVisit, alt: "Foundation team visiting a UNHCR shelter" },
  { src: idpShelterCorridor, alt: "Walking through shelter housing at the IDP center" },
];

export default function Programs() {
  return (
    <section className="programs fade-in">
      <div className="programs__header">
        <p className="programs__eyebrow">What we do</p>
        <h1 className="programs__title">Our Work</h1>
        <p className="programs__subtitle">
          The Yoseph Fikade Foundation focuses on programs that expand access
          to education, empower youth, and strengthen communities in
          Ethiopia. Founded in 2023, we are committed to transparency and
          measurable impact — this page will grow as our programs grow.
        </p>
      </div>

      <div className="programs__stats">
        {stats.map((s) => (
          <div key={s.label} className="programs__stat-card card-hover">
            <div className="programs__stat-number">{s.number}</div>
            <div className="programs__stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="programs__grid">
        {programs.map((p) => (
          <div key={p.title} className="programs__card card-hover">
            <div className="programs__card-bar" style={{ background: p.color }} />
            <div className="programs__card-body">
              <h2 className="programs__card-title">{p.title}</h2>
              <p className="programs__card-text">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="programs__activity">
        <div className="programs__activity-header">
          <p className="programs__eyebrow">In the field</p>
          <h2 className="programs__activity-title">Supporting the Hope IDP center</h2>
          <p className="programs__activity-text">
            Our team visited a displaced-families shelter in Mekelle to serve
            lunch, distribute essential supplies, and check in on living
            conditions in the tented housing — a small but direct way of
            carrying Yoseph's compassion into the community while the school
            project takes shape.
          </p>
        </div>
        <div className="programs__activity-gallery">
          {activityPhotos.map((p) => (
            <div key={p.src} className="programs__activity-item card-hover">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="programs__future fade-in">
        <h2 className="programs__future-title">Looking ahead</h2>
        <p className="programs__future-text">
          As the foundation grows, we will continue expanding our programs to
          reach more students and communities in need — tracking the
          students reached, the schools improved, and the lives transformed
          in memory of Yoseph Fikade. Future initiatives may include
          scholarships, school partnerships, and community development
          projects. Impact reports and program updates will be published
          here regularly.
        </p>
      </div>
    </section>
  );
}
