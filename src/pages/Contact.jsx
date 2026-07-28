import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:info@yosephfikadefoundation.com?subject=${encodeURIComponent(subject || "Message from website")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="contact fade-in">

      <div className="contact__header">
        <p className="contact__eyebrow">Get in touch</p>
        <h1 className="contact__title">Contact us</h1>
        <p className="contact__intro">
          We welcome inquiries, partnerships, and support from individuals and
          organizations who want to help expand educational opportunities through
          the Yoseph Fikade Foundation.
        </p>
      </div>

      <div className="contact__grid">

        {/* Info card */}
        <div className="contact__info-card card-hover">
          <h2 className="contact__card-title">Contact information</h2>

          <div className="contact__info-list">
            <div className="contact__info-item">
              <span className="contact__info-icon">✉️</span>
              <div>
                <div className="contact__info-label">Email</div>
                <a href="mailto:info@yosephfikadefoundation.com" className="contact__info-value contact__link">
                  info@yosephfikadefoundation.com
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-icon">📞</span>
              <div>
                <div className="contact__info-label">Phone</div>
                <a href="tel:+251978787927" className="contact__info-value contact__link">
                  +251 978 787 927
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div>
                <div className="contact__info-label">Address</div>
                <div className="contact__info-value">
                  Adi Haki Sub City<br />
                  Mekelle, Tigray, Ethiopia
                </div>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-icon">📸</span>
              <div>
                <div className="contact__info-label">Instagram</div>
                <a
                  href="https://www.instagram.com/yosephfikadefoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-value contact__link"
                >
                  @yosephfikadefoundation
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-icon">🌐</span>
              <div>
                <div className="contact__info-label">Website</div>
                <span className="contact__info-value">www.yosephfikadefoundation.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="contact__form-card card-hover">
          <h2 className="contact__card-title">Send a message</h2>

          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✅</span>
              <p>Your email client should have opened. If not, email us directly at <a href="mailto:info@yosephfikadefoundation.com" className="contact__link">info@yosephfikadefoundation.com</a>.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">Your name</label>
                  <input
                    type="text"
                    name="name"
                    className="contact__input"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="contact__input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="contact__input"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea
                  name="message"
                  className="contact__textarea"
                  placeholder="Tell us more…"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact__submit">
                Send message →
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  );
}
