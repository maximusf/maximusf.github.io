import React from 'react';
import Project from './Project';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: "project1",
      title: "Project 1",
      description: "Description of your first project. Add details about what it does and what technologies you used.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project1",
      isJavaProject: true,
      javaMainClass: "com.example.Main"
    },
    {
      id: "project2",
      title: "Project 2",
      description: "Description of your second project. Highlight the key features and your role in development.",
      image: "/project2.jpg",
      technologies: ["Python", "Django", "PostgreSQL"],
      link: "https://github.com/yourusername/project2",
      isJavaProject: false
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 