import React from 'react';
import portfolioImg from '../assets/images/portfolio.jpg';
import paintImg from '../assets/images/paint.jpg';
import tutoringAppImg from '../assets/images/tutoringApp.jpeg';
import heartsImg from '../assets/images/hearts.jpeg';
import '../assets/styles/Projects.css';

const projects = [
  {
    title: "This Website!",
    image: portfolioImg,
    link: "https://github.com/CyberKidLeko/ng_ngwenya"
  },
  {
    title: "Go out with me?",
    image: paintImg,
    link: "https://github.com/CyberKidLeko/Go_out_with_me_please"
  },
  {
    title: "Tutoring App",
    image: tutoringAppImg,
    link: "https://github.com/CyberKidLeko/TutoringApp2"
  },
  {
    title: "Date?",
    image: heartsImg,
    link: "https://github.com/CyberKidLeko/Go_out_with_me_please"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            className="project-card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;