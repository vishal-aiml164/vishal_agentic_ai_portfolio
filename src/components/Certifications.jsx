
import "./Certifications.css";

const certifications = [
  {
    issuer: "MICROSOFT",
    title: "Azure Data Scientist Associate",
    subtitle: "Microsoft Certified · DP-100",
    date: "April 2, 2024",
    validity: "Valid until April 3, 2027",
    image: `${import.meta.env.BASE_URL}certificates/Azure_DP_100.png`,
    verify:
      "https://learn.microsoft.com/en-us/users/10397724/credentials/certification/azure-data-scientist?tab=credentials-tab",
  },
  {
    issuer: "ANTHROPIC",
    title: "Claude Certified Associate – Foundations",
    subtitle: "Claude Certification",
    date: "",
    validity: "",
    image: `${import.meta.env.BASE_URL}certificates/claude_associate.png`,
    verify:
      "https://www.credly.com/badges/e0d2ee14-610b-4d75-99a7-6d7a3be29d5f",
  },
  {
    issuer: "APPLIED AI COURSE",
    title: "Applied Machine Learning Course",
    subtitle: "Certificate of Completion",
    date: "December 23, 2022",
    validity: "",
    image: `${import.meta.env.BASE_URL}certificates/Applied_AI_Course_Cert.png`,
    verify:
      "https://www.appliedaicourse.com/certificate/aa9390cf09",
  },
  {
    issuer: "UNIVERSITY OF MICHIGAN · COURSERA",
    title: "Applied Data Science with Python",
    subtitle: "Five-Course Specialization",
    date: "February 6, 2024",
    validity: "",
    image: `${import.meta.env.BASE_URL}certificates/Coursera%20Python%20DS%20Cert.png`,
    verify:
      "https://coursera.org/verify/specialization/6NDR9ZEHH7WF",
  },
];

const achievements = [
  {
    title: "Unit Champion",
    organization: "Tata Consultancy Services",
    year: "2026",
  },
  {
    title: "Technical Excellence & On-the-Spot Awards",
    organization: "Tata Consultancy Services",
    year: "2026",
  },
  {
    title: "GenAI Thought Leadership",
    organization: "Tata Consultancy Services",
    year: "2025",
  },
  {
    title: "Impact Player Award",
    organization: "Tata Consultancy Services",
    year: "2024",
  },
  {
    title: "Technocrat",
    organization: "Cognizant",
    year: "2021",
  },
  {
    title: "Digital Champion",
    organization: "Cognizant",
    year: "2020",
  },
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        {/* Certifications Header */}

        <div className="certifications-header">
          <p className="section-subtitle">
            PROFESSIONAL CREDENTIALS
          </p>

          <h2 className="section-title">
            Certifications & Credentials
          </h2>

          <p className="certifications-intro">
            A collection of professional certifications
            and learning credentials across Data Science,
            Machine Learning, Cloud and Generative AI.
          </p>
        </div>

        {/* Certificate Gallery */}

        <div className="certificate-gallery">
          {certifications.map((item) => (
            <article
              className="certificate-item"
              key={item.title}
            >

              {/* Certificate Image */}

              <a
                className="certificate-image-link"
                href={item.verify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="certificate-image"
                  loading="lazy"
                />
              </a>

              {/* Verification Link - Moved Below Image */}

              <a
                href={item.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-verify"
              >
                Verify Credential ↗
              </a>

              {/* Certificate Details */}

              <p className="certificate-issuer">
                {item.issuer}
              </p>

              <h3>{item.title}</h3>

              <p className="certificate-subtitle">
                {item.subtitle}
              </p>

              <div className="certificate-footer">
                <div className="certificate-date-info">

                  {item.date && (
                    <p className="certificate-date">
                      {item.date}
                    </p>
                  )}

                  {item.validity && (
                    <p className="certificate-validity">
                      {item.validity}
                    </p>
                  )}

                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Awards and Achievements */}

        <div
          className="achievements-section"
          id="achievements"
        >
          <div className="achievements-header">
            <p className="section-subtitle">
              RECOGNITION & IMPACT
            </p>

            <h2 className="section-title">
              Awards & Achievements
            </h2>

            <p className="certifications-intro">
              Recognition for technical excellence,
              innovation and contributions to business outcomes.
            </p>
          </div>

          <div className="achievements-list">
            {achievements.map((item) => (
              <article
                className="achievement-card"
                key={item.title}
              >
                <div className="achievement-icon">
                  ★
                </div>

                <div className="achievement-content">
                  <h3>{item.title}</h3>
                  <p>{item.organization}</p>
                </div>

                <span className="achievement-year">
                  {item.year}
                </span>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certifications;
