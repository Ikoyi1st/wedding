import { useState } from "react";
import Hero from "./components/Hero";
import FamilyCard from "./components/FamilyCard";
import PhotoGallery from "./components/PhotoGallery";
import ProgramSection from "./components/ProgramSection";
import Closing from "./components/Closing";
import { traditionalProgram, churchProgram } from "./data/programData";
import "./styles/global.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("traditional");

  return (
    <div className="app">
      <div className="blob blob-top" />
      <div className="blob blob-bottom" />

      <div className="page">
        <Hero />

        <div className="colors-strip">
          <span className="color-dot" style={{ background: "#3d0a3f" }} />
          <span className="color-dot" style={{ background: "#d4a8e0" }} />
          <span className="color-dot" style={{ background: "#8a8a9a" }} />
          <span className="strip-label">Purple | Lilac | Grey</span>
        </div>

        <FamilyCard />
        {/* <PhotoGallery /> */}

        <div className="tab-switcher">
          <button
            type="button"
            className={`tab-btn ${activeTab === "traditional" ? "active" : ""}`}
            onClick={() => setActiveTab("traditional")}
            aria-pressed={activeTab === "traditional"}
          >
            Traditional Wedding
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "church" ? "active" : ""}`}
            onClick={() => setActiveTab("church")}
            aria-pressed={activeTab === "church"}
          >
            Church Wedding
          </button>
        </div>

        {activeTab === "traditional" ? (
          <ProgramSection
            key="traditional"
            title="Traditional Wedding"
            subtitle="Friday, 5 June 2026 | 2:00 PM"
            venue="Pst. Samuel Obochi's Compound, Road 1, Durumi New Extension, Gonin-Gora, Kaduna."
            blocks={traditionalProgram}
          />
        ) : (
          <ProgramSection
            key="church"
            title="Church Wedding"
            subtitle="Saturday, 6 June 2026 | 10:00 AM"
            venue="Overflowing Life Christian Centre, Road 1, Durumi New Extension, Gonin-Gora, Kaduna."
            blocks={churchProgram}
          />
        )}

        <Closing />
      </div>
    </div>
  );
}
