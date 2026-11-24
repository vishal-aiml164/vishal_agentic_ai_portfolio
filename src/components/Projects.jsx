
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.css";

const enterpriseProjects = [
  {
    title: "Enterprise Conversational Analytics",
    category: "Generative AI",
    description:
      "An AI-powered analytics solution that enables users to explore business information through conversational interactions and personalized insights.",
    technologies: ["Python", "LLMs", "LangGraph", "Azure OpenAI"],
    type: "Enterprise AI",
  },
  {
    title: "AI-powered Document Intelligence",
    category: "Generative AI",
    description:
      "A document intelligence application that uses language models and retrieval-based techniques to extract information and answer questions from documents.",
    technologies: ["Python", "LangChain", "RAG", "Vector Databases"],
    type: "Enterprise AI",
  },
];

const allProjects = [...enterpriseProjects, ...projects];

const filters = [
  "All",
  "Generative AI",
  "Machine Learning",
  "NLP & Deep Learning",
  "Computer Vision",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-header">
          <p className="section-subtitle">SELECTED WORK</p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="projects-intro">
            Exploring practical applications of Artificial
            Intelligence, Machine Learning, Generative AI
            and data-driven technologies.
          </p>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "project-filter active"
                  : "project-filter"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {

            const cardContent = (
              <>
                <div className="project-card-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span>{project.type}</span>

                    <span className="project-status">
                      {project.id
                        ? "View Project Details →"
                        : "Case study coming soon"}
                    </span>
                  </div>

                </div>

                {project.image && (
                  <div className="project-card-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                )}
              </>
            );

            return project.id ? (
              <Link
                to={`/projects/${project.id}`}
                className="project-card project-card-link"
                key={project.id}
              >
                {cardContent}
              </Link>
            ) : (
              <article
                className="project-card"
                key={project.title}
              >
                {cardContent}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;
