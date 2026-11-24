
import "./Experience.css";

const experiences = [
  {
    role: "Technical Architect – Data Scientist",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    duration: "2022 – Present",

    description:
      "Leading the design and delivery of enterprise AI, Machine Learning and Generative AI solutions, focusing on intelligent automation, conversational analytics and scalable business applications.",

    highlights: [
      <>
        Designed enterprise AI solutions for personalized business
        insights and conversational analytics, supporting more than
        <strong className="experience-metric"> 9,000+ users.</strong>
      </>,

      "Developed intelligent AI-powered applications using Generative AI, Large Language Models and multi-agent approaches.",

      <>
        Contributed to enterprise IT support automation through
        conversational AI and knowledge-based assistance, supporting
        <strong className="experience-metric"> 150 users.</strong>
      </>,

      "Worked on pricing analytics and predictive modeling solutions to identify business drivers and potential cost-saving opportunities.",

      "Developed document intelligence applications using LLMs, document processing, embeddings and vector databases.",

      <>
        Contributed to
        <strong className="experience-metric"> 18+ RFPs/proposals</strong>
        {" "}and AI transformation initiatives, and participated in
        GenAI knowledge-sharing sessions.
      </>
    ],

    technologies: [
      "Python",
      "Generative AI",
      "LLMs",
      "LangChain",
      "LangGraph",
      "Azure OpenAI",
      "FastAPI",
      "Flask",
      "Snowflake",
      "Azure"
    ]
  },

  {
    role: "Senior Data Scientist",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    duration: "2012 – 2022",

    description:
      "Designed and implemented end-to-end Data Science, Machine Learning, Deep Learning and NLP solutions across healthcare and life sciences business domains.",

    highlights: [
      <>
        Developed physician targeting and classification models
        that improved marketing spend ROI by over
        <strong className="experience-metric"> 25%+.</strong>
      </>,

      "Built clinical Named Entity Recognition solutions to automate the extraction and classification of biomedical information.",

      "Developed text summarization applications using Transformer-based models, including GPT-3 and BERT.",

      "Implemented computer vision solutions for automatic vehicle license plate detection using object detection and OCR.",

      <>
        Built predictive analytics and healthcare resource
        optimization models, contributing to a
        <strong className="experience-metric"> 20% reduction</strong>
        {" "}in planning costs.
      </>,

      "Developed NLP-based research article classification solutions to automate document categorization and reduce manual effort."
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "TensorFlow",
      "NLP",
      "spaCy",
      "BERT",
      "XGBoost",
      "YOLO",
      "AWS"
    ]
  },

  {
    role: "Data Warehouse Developer",
    company: "Zensar Technologies",
    location: "Pune, India",
    duration: "2011 – 2012",

    description:
      "Worked on enterprise data warehousing, data integration and ETL development.",

    highlights: [
      "Developed end-to-end ETL pipelines using Informatica and SQL.",

      "Created and maintained database objects and data integration workflows.",

      "Supported data transformation and loading processes across enterprise data sources."
    ],

    technologies: [
      "SQL",
      "Informatica",
      "ETL",
      "Data Warehousing",
      "Database Development"
    ]
  },

  {
    role: "Programmer Analyst",
    company: "Verinon and Delasoft",
    location: "Chicago and Delaware, USA",
    duration: "2008 – 2011",

    description:
      "Started my professional career working on enterprise data integration and database development.",

    highlights: [
      "Developed and monitored Informatica workflows, sessions and data integration processes.",

      "Troubleshot SQL queries, mappings and workflows to identify performance bottlenecks.",

      "Supported enterprise data processing and ETL operations."
    ],

    technologies: [
      "SQL",
      "Informatica",
      "ETL",
      "Data Integration",
      "Database Development"
    ]
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        {/* Section Heading */}

        <div className="experience-header">

          <p className="section-subtitle">
            MY CAREER JOURNEY
          </p>

          <h2 className="section-title">
            Professional Experience
          </h2>

          <p className="experience-intro">
            Over{" "}
            <strong className="experience-metric">
              18+ years
            </strong>{" "}
            of experience across technology, data engineering,
            data science and artificial intelligence, building
            data-driven solutions and enterprise applications.
          </p>

        </div>

        {/* Career Timeline */}

        <div className="experience-list">

          {experiences.map((item, index) => (

            <article
              className="experience-card"
              key={item.company}
            >

              {/* Timeline Marker */}

              <div className="experience-marker">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Experience Details */}

              <div className="experience-card-content">

                <div className="experience-top">

                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  <span className="experience-duration">
                    {item.duration}
                  </span>

                </div>

                <p className="experience-location">
                  {item.location}
                </p>

                <p className="experience-description">
                  {item.description}
                </p>

                <h5>Key Contributions</h5>

                <ul className="experience-highlights">

                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}

                </ul>

                {/* Technology Tags */}

                <div className="experience-technologies">

                  {item.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
