import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TARGETS = [
  ".home__hero-left",
  ".home__stats-col",
  ".home__mission-strip",
  ".home__program-card",
  ".home__cta-inner",
  ".home__stat-card",
  ".section-header",
  ".about__card",
  ".about__belief",
  ".programs__card",
  ".programs__future",
  ".impact__stat-card",
  ".impact__pillar-card",
  ".impact__future",
  ".donate__picker-card",
  ".donate__main-card",
  ".donate__options-card",
  ".donate__mini-card",
  ".contact__info-card",
  ".contact__form-card",
  ".get-involved__card",
  ".get-involved__cta",
].join(", ");

export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Small timeout lets React finish painting the new route
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll(TARGETS));

      // Mark each element; stagger siblings in same grid parent
      elements.forEach((el) => {
        el.classList.add("reveal");

        const siblings = Array.from(
          el.parentElement?.querySelectorAll(":scope > .reveal") ?? []
        );
        const idx = siblings.indexOf(el);
        if (idx > 0) {
          el.style.setProperty("--reveal-delay", `${idx * 80}ms`);
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
