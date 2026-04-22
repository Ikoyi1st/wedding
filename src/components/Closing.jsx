import "./Closing.css";

export default function Closing() {
  return (
    <div className="closing">
      <span className="closing-star">✦</span>
      <h3 className="closing-quote">"What God has joined together…"</h3>
      <p className="closing-body">
        Thank you for celebrating this beautiful union with us. Your presence,
        prayers, and love mean everything to Victoria, Salem, and both families.
      </p>
      <div className="closing-rsvp">
        <span className="rsvp-label">RSVP</span>
        <span className="rsvp-sep">·</span>
        <a href="tel:07064315952" className="rsvp-number">07064315952</a>
      </div>

      <div className="closing-divider">
        <span />
        <i>✦</i>
        <span />
      </div>

      <p className="closing-footer">
        Victoria &amp; Salem &nbsp;·&nbsp; 2026
      </p>
    </div>
  );
}
