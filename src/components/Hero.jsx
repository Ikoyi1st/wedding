import heroBackground from "../assets/images/couple-hero-bw.jpeg";
import "./Hero.css";

export default function Hero() {
  return (
    <div
      className="hero"
      style={{ "--hero-image": `url(${heroBackground})` }}
    >
      <div className="hero-overlay" />
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

      <div className="divider-floral">
        <span className="divider-line" />
        <span className="divider-star">{"\u2726"}</span>
        <span className="divider-line" />
      </div>

      <div className="event-dates">
      
        <div className="event-pill">
          <span className="pill-label">Church</span>
          <span className="pill-date">Saturday, 6 June 2026 | 10:00 AM</span>
        </div>
      </div>
    </div>
  );
}
