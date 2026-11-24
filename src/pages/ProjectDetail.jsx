
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="project-not-found">
          <h2>Project Not Found</h2>
          <Link to="/#projects" className="back-projects-button">
            Back to Projects
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="project-detail">
        <div className="project-single-screen">

          {/* LEFT: PROJECT CONTENT */}
          <section className="project-info-panel">

            <Link to="/#projects" className="back-projects-link">
            
            ← Back to Projects
            </Link>

            <span className="project-detail-category">
              {project.category}
            </span>

            <p className="project-eyebrow">
              PROJECT CASE STUDY
            </p>

            <h1>{project.title}</h1>

            <p className="project-detail-intro">
              {project.description}
            </p>

            {/* TECHNOLOGIES */}
            <div className="project-detail-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            {/* PROJECT DETAILS */}
            <div className="project-quick-details">

              <div className="quick-detail-item">
                <h3>THE CHALLENGE</h3>
                <p>{project.problem}</p>
              </div>

              <div className="quick-detail-item">
                <h3>APPROACH & METHODOLOGY</h3>
                <p>{project.approach}</p>
              </div>

              <div className="quick-detail-item result-detail">
                <h3>RESULTS & KEY FINDINGS</h3>
                <p>{project.results}</p>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="project-detail-actions">

              {project.mediumUrl && (
                <a
                  href={project.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail-button primary"
                >
                  Read Full Article ↗
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail-button secondary"
                >
                  GitHub Repository ↗
                </a>
              )}

            </div>

          </section>

          {/* RIGHT: PROJECT IMAGE */}
          <section className="project-visual-panel">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="project-showcase-image"
              />
            )}
          </section>

        </div>
      </main>
    </>
  );
}

export default ProjectDetail;
