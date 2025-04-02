import { PROJECTS } from "./constants";
import { motion } from "framer-motion";
import "./project.css"; // Import external CSS

const Projects = () => {
  return (
    <div className="projects-container">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="projects-title"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-item">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="project-year"
            >
              <p>{project.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="project-details"
            >
              <h3>
                {project.title} -{" "}
                <span className="project-tech">{project.technology}</span>
              </h3>
              <p>{project.description}</p>
              <p>{project.status}</p>
              <button className="project-button" onClick={() => window.open(project.githublink)}> Navigate to Repo</button>

            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
