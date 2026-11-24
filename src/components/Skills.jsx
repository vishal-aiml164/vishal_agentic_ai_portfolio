
import "./Skills.css";

const skillCategories = [
  {
    title: "Programming & Data",
    description: "Programming languages and data manipulation.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    description: "Building predictive and data-driven solutions.",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "Forecasting",
      "Classification",
      "Regression",
      "Feature Engineering",
    ],
  },
  {
    title: "Deep Learning & NLP",
    description: "Working with neural networks and language data.",
    skills: [
      "Deep Learning",
      "Natural Language Processing",
      "Text Classification",
      "Named Entity Recognition",
      "Neural Networks",
    ],
  },
  {
    title: "Generative AI",
    description: "Exploring modern generative AI applications.",
    skills: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "Retrieval-Augmented Generation",
      "LLM Applications",
    ],
  },
  {
    title: "Agentic AI",
    description: "Exploring intelligent agents and workflow automation.",
    skills: [
      "AI Agents",
      "Agentic Workflows",
      "Tool Calling",
      "Multi-Agent Systems",
      "AI Automation",
    ],
  },
  {
    title: "Data Engineering & Tools",
    description: "Data foundations, engineering and development tools.",
    skills: [
      "Data Warehousing",
      "ETL",
      "Data Processing",
      "Git",
      "GitHub",
      "Jupyter Notebook",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Section Heading */}
        <div className="skills-header">
          <p className="section-subtitle">
            WHAT I WORK WITH
          </p>

          <h2 className="section-title">
            Technical Skills
          </h2>

          <p className="skills-intro">
            My technical expertise spans Data Engineering,
            Data Science, Machine Learning and emerging
            Generative AI technologies.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={category.title}>

              <div className="skill-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{category.title}</h3>

              <p className="skill-card-description">
                {category.description}
              </p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
