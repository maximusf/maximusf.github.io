import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Project.css';

const Project = ({ id, title, description, image, technologies, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <button className="project-link">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Project; 