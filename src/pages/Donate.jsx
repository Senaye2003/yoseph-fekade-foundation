import { useState } from "react";
import "./Donate.css";

const amounts = ["$10", "$25", "$50", "$100", "$250", "$500"];

const reasons = [
  {
    icon: "📚",
    title: "Support students",
    text: "Help provide books, uniforms, and school supplies that remove barriers to learning.",
  },
  {
    icon: "🌱",
    title: "Strengthen programs",
    text: "Fund youth development and community initiatives that invest in lasting change.",
  },
  {
    icon: "💛",
    title: "Honor Yoseph's legacy",
    text: "Carry forward a mission rooted in compassion, education, and hope.",
  },
];

export default function Donate() {
  const [selected, setSelected] = useState("$50");
  const [custom, setCustom] = useState("");

  return (
    <section className="donate fade-in">

      <div className="donate__header">
        <p className="donate__eyebrow">Make a difference</p>
        <h1 className="donate__title">Donate to the foundation</h1>
        <p className="donate__intro">
          Your support helps the Yoseph Fikade Foundation expand educational
          opportunities, support students in need, and invest in stronger
          communities — in memory of Yoseph Fikade.
        </p>
      </div>

      {/* Amount picker */}
      <div className="donate__picker-card fade-in">
        <h2 className="donate__card-title">Choose an amount</h2>
        <div className="donate__amounts">
          {amounts.map((a) => (
            <button
              key={a}
              className={`donate__amount-btn${selected === a && !custom ? " donate__amount-btn--active" : ""}`}
              onClick={() => { setSelected(a); setCustom(""); }}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="donate__custom-row">
          <span className="donate__custom-label">Custom amount</span>
          <div className="donate__custom-input-wrap">
            <span className="donate__currency">$</span>
            <input
              type="number"
              className="donate__custom-input"
              placeholder="Other"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setSelected(""); }}
              min="1"
            />
          </div>
        </div>

        <div className="donate__cta-row">
          <a
            href={`mailto:info@yosephfikadefoundation.com?subject=Donation%20Inquiry%20(${encodeURIComponent(custom ? "$" + custom : selected)})&body=Hi%2C%20I%20would%20like%20to%20donate%20${encodeURIComponent(custom ? "$" + custom : selected)}%20to%20the%20Yoseph%20Fikade%20Foundation.%20Please%20let%20me%20know%20how%20to%20proceed.`}
            className="donate__btn-primary"
          >
            Donate {custom ? `$${custom}` : selected} →
          </a>
          <p className="donate__cta-note">
            Online payment coming soon. For now, click above to contact us and we'll help you complete your donation.
          </p>
        </div>
      </div>

      {/* Why it matters */}
      <div className="donate__main-card fade-in">
        <h2 className="donate__card-title">Why your donation matters</h2>
        <p className="donate__card-text">
          Every contribution moves the foundation's mission forward — from giving
          students the essentials they need to learn, to strengthening the
          communities where they grow up.
        </p>
        <div className="donate__grid">
          {reasons.map((r) => (
            <div key={r.title} className="donate__mini-card card-hover">
              <span className="donate__mini-icon">{r.icon}</span>
              <h3 className="donate__mini-title">{r.title}</h3>
              <p className="donate__mini-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="donate__options-card fade-in">
        <h2 className="donate__card-title">Other ways to give</h2>
        <p className="donate__card-text">
          To donate by bank transfer, check, or another method — or to make a
          recurring gift — please reach out to us directly.
        </p>
        <a href="mailto:info@yosephfikadefoundation.com" className="donate__contact-link">
          info@yosephfikadefoundation.com →
        </a>
      </div>

    </section>
  );
}
