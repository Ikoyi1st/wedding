import { useState } from "react";
import "./ProgramSection.css";

function ProgramItem({ number, title, description, details, dropdown, time, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`program-item ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className="item-accent" />
      <div className="item-number">{String(number).padStart(2, "0")}</div>
      <div className="item-content">
        <h5 className="item-title">{title}</h5>
        {description && <p className="item-desc">{description}</p>}
        {details?.length ? (
          <div className="item-details">
            {details.map((detail, detailIndex) => (
              <p key={detailIndex} className="item-detail">
                {detail}
              </p>
            ))}
          </div>
        ) : null}
        {dropdown ? (
          <details className="item-dropdown">
            <summary className="item-dropdown-summary">{dropdown.label}</summary>
            <div className="item-dropdown-body">
              {dropdown.lyrics?.length ? (
                <div className="item-dropdown-lyrics">
                  {dropdown.lyrics.map((verse, verseIndex) => (
                    <p key={verseIndex} className="item-dropdown-verse">
                      {verse}
                    </p>
                  ))}
                </div>
              ) : null}
              {dropdown.preview && <p className="item-dropdown-preview">{dropdown.preview}</p>}
              {dropdown.note && <p className="item-dropdown-note">{dropdown.note}</p>}
              {dropdown.sourceUrl ? (
                <a
                  className="item-dropdown-link"
                  href={dropdown.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {dropdown.sourceLabel || "View source"}
                </a>
              ) : null}
            </div>
          </details>
        ) : null}
      </div>
      {time && <div className="item-time">{time}</div>}
    </div>
  );
}

function ProgramBlock({ icon, heading, badge, items }) {
  return (
    <div className="program-block">
      <div className="block-header">
        <span className="block-icon">{icon}</span>
        <h4 className="block-heading">{heading}</h4>
        {badge && <span className="block-badge">{badge}</span>}
      </div>
      <div className="block-items">
        {items.map((item, i) => (
          <ProgramItem key={i} index={i} number={i + 1} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function ProgramSection({ title, subtitle, venue, blocks }) {
  return (
    <div className="program-section">
      <div className="section-header">
        <span className="section-eyebrow">Order of Service</span>
        <h3 className="section-title">{title}</h3>
        <p className="section-meta">{subtitle}</p>
        <p className="section-venue">
          {"\uD83D\uDCCD"} {venue}
        </p>
      </div>

      {blocks.map((block, i) => (
        <ProgramBlock key={i} {...block} />
      ))}
    </div>
  );
}
