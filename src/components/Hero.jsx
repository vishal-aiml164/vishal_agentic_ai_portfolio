
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-layout">

        {/* LEFT SIDE - INTRODUCTION */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Vishal K Singh
          </h1>

          <h2>
            AI/ML | Generative AI | Agentic AI
          </h2>

          <p className="hero-description">
            I'm an AI/ML professional passionate about building
            intelligent, data-driven solutions. My journey spans
            Data Engineering, Data Science, and Machine Learning,
            with a growing focus on Generative AI, LLMs, RAG,
            and Agentic AI.

            <br /><br />

            I enjoy combining analytical thinking and modern AI
            technologies to solve real-world business challenges,
            particularly across Life Sciences, Insurance, Retail,
            and Financial Services.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              Explore My Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>

          </div>

          {/* SKILL TAGS */}
          <div className="hero-skills">
            <span>Machine Learning</span>
            <span>Deep Learning</span>
            <span>Generative AI</span>
            <span>LLMs & RAG</span>
            <span>Agentic AI</span>
          </div>

        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="hero-image-container">

          <img
            src={`${import.meta.env.BASE_URL}certificates/Vishal_3.jpeg`}
            alt="Vishal K Singh"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
