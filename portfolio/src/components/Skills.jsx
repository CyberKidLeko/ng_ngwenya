import React, { useEffect } from 'react';
import '../assets/styles/Skills.css';

const skills = [
  { name: "HTML & CSS", percentage: 85, color: "#00509e" },
  { name: "React", percentage: 40, color: "#80c1e3" },
  { name: "JavaScript", percentage: 70, color: "#0077b6" },
  { name: "Git and GitHub", percentage: 90, color: "#003566" },
  { name: "Web Design", percentage: 75, color: "#468faf" },
  { name: "SQL", percentage: 65, color: "#61a5c2" },
  { name: "Python", percentage: 55, color: "#a9d6e5" },
  { name: "Java", percentage: 75, color: "#0077b6" },
  { name: "ASP.net", percentage: 70, color: "#468faf" },
  { name: ".NET (WinForms)", percentage: 75, color: "#00509e" }
];

const Skills = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-percent');
      bar.style.width = width + '%';
    });
  }, []);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-label">{skill.name}</div>
            <div className="progress-bar">
              <div 
                className="progress" 
                data-percent={skill.percentage}
                style={{ 
                  backgroundColor: skill.color,
                  color: skill.percentage > 50 ? 'white' : 'black'
                }}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;