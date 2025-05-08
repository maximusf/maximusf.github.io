import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');

  // This would typically come from a database or API
  const project = {
    id: projectId,
    title: "Project 1",
    description: "Detailed description of your project. This is where you can provide more in-depth information about what the project does, how it works, and what technologies were used.",
    longDescription: `This is a more detailed description of your project. You can include:
    - Project goals and objectives
    - Technical challenges and solutions
    - Key features and functionality
    - Your role in development
    - Technologies and tools used
    - Future improvements or plans`,
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project1",
    isJavaProject: true, // Set this based on your project type
    javaMainClass: "com.example.Main", // Set this for Java projects
  };

  const runJavaProject = async () => {
    setIsRunning(true);
    setOutput('Running Java project...\n');
    
    try {
      // This is a placeholder for actual Java project execution
      // In a real implementation, you would need a backend service to run Java projects
      const response = await fetch('/api/run-java', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mainClass: project.javaMainClass,
          projectId: project.id,
        }),
      });
      
      const data = await response.json();
      setOutput(prev => prev + data.output);
    } catch (error) {
      setOutput(prev => prev + `Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>
      
      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-content">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="project-info">
          <h2>About this Project</h2>
          <p>{project.longDescription}</p>
          
          <div className="project-actions">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
              View on GitHub
            </a>
            
            {project.isJavaProject && (
              <div className="java-runner">
                <h3>Run Project</h3>
                <button 
                  onClick={runJavaProject} 
                  disabled={isRunning}
                  className="run-button"
                >
                  {isRunning ? 'Running...' : 'Run Project'}
                </button>
                {output && (
                  <div className="output-container">
                    <pre>{output}</pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 