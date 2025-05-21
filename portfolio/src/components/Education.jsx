import React from 'react';
import '../assets/styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      
      <div className="education-item">
        <h3>Northwest University</h3>
        <p className="degree">Bachelor's Degree</p>
        <p className="duration">January 2022 - Present</p>
        <ul className="details">
          <li>Major: Computer Programming, SQL</li>
        </ul>
      </div>
      
      <div className="education-item">
        <h3>Codecademy</h3>
        <p className="degree">Certificate</p>
        <p className="duration">September 2024</p>
        <ul className="details">
          <li>Area of Study: Full-Stack Engineer</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;