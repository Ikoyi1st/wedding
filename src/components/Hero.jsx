import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-glow hero-glow-top" />
      <div className="hero-glow hero-glow-bottom" />

      <p className="hero-eyebrow">Wedding Program</p>

      <div className="names">
        <span className="name name-victoria">Victoria</span>
        <div className="names-row2">
          <span className="ampersand">&amp;</span>
          <span className="name name-salem">Salem</span>
        </div>
      </div>

      <p className="full-names">Unekwuojo Obochi &nbsp;·&nbsp; Enejo Akowe</p>

      <div className="divider-floral">
        <span className="divider-line" />
        <span className="divider-star">✦</span>
        <span className="divider-line" />
      </div>

      <div className="event-dates">
        <div className="event-pill">
          <span className="pill-label">Traditional</span>
          <span className="pill-date">Friday, 5th June 2026 · 2pm</span>
        </div>
        <div className="event-pill">
          <span className="pill-label">Church</span>
          <span className="pill-date">Saturday, 6th June 2026 · 10am</span>
        </div>
      </div>
    </div>
  );
}
