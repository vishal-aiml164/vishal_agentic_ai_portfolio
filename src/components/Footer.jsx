
import "./Footer.css";

function Footer() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href={`${baseUrl}#home`} className="footer-logo">
            Vishal.
          </a>
          <p>AI/ML | Generative AI | Agentic AI</p>
        </div>

        <div className="footer-links">
          <a href={`${baseUrl}#about`}>About</a>
          <a href={`${baseUrl}#skills`}>Skills</a>
          <a href={`${baseUrl}#experience`}>Experience</a>
          <a href={`${baseUrl}#certifications`}>Certifications</a>
          <a href={`${baseUrl}#achievements`}>Awards</a>
          <a href={`${baseUrl}#projects`}>Projects</a>
          <a href={`${baseUrl}#contact`}>Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/vishal-aiml164"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-singh-010208209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vishal K Singh.
          All rights reserved.
        </p>

        <a href={`${baseUrl}#home`}>Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
