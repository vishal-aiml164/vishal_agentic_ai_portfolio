
function About() {
  const expertise = [
    {
      number: "01",
      title: "Data Engineering",
      description:
        "Strong foundations in data warehousing, data management and building data-driven solutions.",
    },
    {
      number: "02",
      title: "Data Science & ML",
      description:
        "Experience in predictive modeling, forecasting, classification and deep learning.",
    },
    {
      number: "03",
      title: "Generative AI",
      description:
        "Exploring LLMs, Retrieval-Augmented Generation (RAG) and intelligent AI applications.",
    },
    {
      number: "04",
      title: "Agentic AI",
      description:
        "Developing knowledge and exploring AI agents, reasoning and workflow automation.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-subtitle">GET TO KNOW ME</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-layout">

          {/* LEFT: PROFESSIONAL INTRODUCTION */}
          <div className="about-content">

            <h3>
              Bridging Data Engineering, Data Science
              and Artificial Intelligence.
            </h3>

            <p>
              I am Vishal K Singh, an AI/ML professional
              passionate about transforming data into
              meaningful insights and intelligent business
              solutions.
            </p>

            <p>
              My professional journey spans Data Warehousing,
              Data Engineering, Data Science and Machine
              Learning. This combination gives me a strong
              foundation in understanding data, developing
              analytical solutions and solving real-world
              business challenges.
            </p>

            <p>
              My current interests include Generative AI,
              Large Language Models (LLMs), Retrieval-Augmented
              Generation (RAG) and Agentic AI systems.
              I enjoy exploring how these technologies can
              improve workflows and enable smarter applications.
            </p>

            <p>
              I am particularly interested in applying
              AI-driven approaches across Life Sciences,
              Insurance, Retail and Financial Services.
            </p>

          </div>

          {/* RIGHT: AREAS OF EXPERTISE */}
          <div className="about-expertise">

            <p className="expertise-heading">
              AREAS OF EXPERTISE
            </p>

            {expertise.map((item) => (
              <div className="expertise-item" key={item.number}>
                <span className="expertise-number">
                  {item.number}
                </span>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
