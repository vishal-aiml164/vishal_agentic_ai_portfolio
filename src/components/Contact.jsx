
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <p className="section-subtitle">LET'S CONNECT</p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="contact-intro">
            I'm interested in discussing opportunities,
            innovative AI solutions, Data Science projects
            and collaborations. Feel free to get in touch.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p>
              Whether you have an interesting opportunity,
              a technical discussion or a collaboration in mind,
              I'd be happy to connect.
            </p>

            <div className="contact-details">

              <a href="mailto:vishal.aiml164@gmail.com">
                <span className="contact-icon">✉</span>
                <span>
                  <small>Email</small>
                  vishal.aiml164@gmail.com
                </span>
              </a>

                <a
                href="https://www.linkedin.com/in/vishal-singh-010208209/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span className="contact-icon">in</span>
                <span>
                    <small>LinkedIn</small>
                    https://www.linkedin.com/in/vishal-singh-010208209/
                </span>
                </a>

                <a
                href="https://github.com/vishal-aiml164"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span className="contact-icon">⌘</span>
                <span>
                    <small>GitHub</small>
                    https://github.com/vishal-aiml164
                </span>
                </a>

            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">✦</div>

            <h3>Have an AI idea or opportunity?</h3>

            <p>
              Let's explore how Artificial Intelligence,
              Machine Learning and Generative AI can
              create meaningful business impact.
            </p>

            <a
              href="mailto:vishal.aiml164@gmail.com"
              className="contact-email-button"
            >
              Say Hello ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
