import React from "react";

function ProjectCard({ title, description, awards, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <br></br>
      <p><strong>Awards: </strong>{awards}</p>
      <br></br>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project →
      </a>
    </div>
  );
}

export default ProjectCard;