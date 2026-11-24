
import { useState } from "react";
const baseUrl = import.meta.env.BASE_URL;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href={baseUrl} className="logo" onClick={closeMenu}>
          Vishal.
        </a>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="navbar-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation links */}
      <div
        id="navbar-links"
        className={`navbar-links ${menuOpen ? "is-open" : ""}`}
      >
        <a href={`${baseUrl}#home`} onClick={closeMenu}>Home</a>
        <a href={`${baseUrl}#about`} onClick={closeMenu}>About</a>
        <a href={`${baseUrl}#skills`} onClick={closeMenu}>Skills</a>
        <a href={`${baseUrl}#experience`} onClick={closeMenu}>Experience</a>
        <a href={`${baseUrl}#certifications`} onClick={closeMenu}>Certifications</a>
        <a href={`${baseUrl}#achievements`} onClick={closeMenu}>Awards</a>
        <a href={`${baseUrl}#projects`} onClick={closeMenu}>Projects</a>
        <a href={`${baseUrl}#contact`} onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
