import { Link } from "react-router-dom";
import "./GetInvolved.css";

const ways = [
  {
    icon: "🤝",
    title: "Volunteer",
    text:
      "Contribute your time, skills, and energy to support foundation initiatives, outreach, and programs that directly benefit students and communities in Ethiopia.",
    action: { label: "Get in touch", to: "/contact" },
    color: "#1e5c46",
  },
  {
    icon: "🏫",
    title: "Partner with us",
    text:
      "Schools, nonprofits, and organizations can collaborate with the foundation to expand programs and create greater impact in Mekelle, Tigray, and beyond.",
    action: { label: "Contact us", to: "/contact" },
    color: "#a9822f",
  },
  {
    icon: "💛",
    title: "Donate",
    text:
      "Financial contributions fund school supplies, student assistance, and community programs that create lasting educational opportunity in memory of Yoseph.",
    action: { label: "Make a donation", to: "/donate" },
    color: "#7a3b46",
  },
  {
    icon: "📢",
    title: "Spread the word",
    text:
      "Share the foundation’s story and mission on social media. Awareness creates connections — every share helps us reach new supporters, partners, and donors.",
    action: { label: "Follow on Instagram", href: "https://www.instagram.com/yosephfikadefoundation" },
    color: "#3f6b73",
  },
];

export default function GetInvolved() {
  return (
    <section className="get-involved fade-in">

      <div className="get-involved__header">
        <p className="get-involved__eyebrow">Join the mission</p>
        <h1 className="get-involved__title">Get involved</h1>
        <p className="get-involved__intro">
          The Yoseph Fikade Foundation welcomes individuals, organizations,
          and community partners who want to help expand educational
          opportunities and support young people in Ethiopia.
        </p>
      </div>

      <div className="get-involved__grid">
        {ways.map((w) => (
          <div key={w.title} className="get-involved__card card-hover">
            <div className="get-involved__card-bar" style={{ background: w.color }} />
            <div className="get-involved__card-body">
              <span className="get-involved__card-icon">{w.icon}</span>
              <h2 className="get-involved__card-title">{w.title}</h2>
              <p className="get-involved__card-text">{w.text}</p>
              {w.action.to ? (
                <Link to={w.action.to} className="get-involved__card-link" style={{ color: w.color }}>
                  {w.action.label} →
                </Link>
              ) : (
                <a href={w.action.href} target="_blank" rel="noopener noreferrer" className="get-involved__card-link" style={{ color: w.color }}>
                  {w.action.label} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="get-involved__cta fade-in">
        <div className="get-involved__cta-text">
          <h2 className="get-involved__cta-title">Ready to make a difference?</h2>
          <p className="get-involved__cta-body">
            Whether you want to volunteer, collaborate, or simply learn more about
            our work — we’d love to hear from you. Reach out and let’s explore how
            we can work together to carry Yoseph’s legacy forward.
          </p>
        </div>
        <div className="get-involved__cta-actions">
          <Link to="/contact" className="get-involved__btn-primary">Contact us →</Link>
          <Link to="/donate" className="get-involved__btn-secondary">Donate</Link>
        </div>
      </div>

    </section>
  );
}