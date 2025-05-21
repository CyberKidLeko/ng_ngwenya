import React from 'react';
import githubIcon from '../assets/images/github-mark.png';
import linkedinIcon from '../assets/images/LI-In-Bug.png';
import emailIcon from '../assets/images/icons8-gmail-48.png';
import '../assets/styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Connect with Me</h2>
      <div className="social-links">
        <a href="https://github.com/CyberKidLeko" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/ngwenya-nomsa" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:nkululekongwenya123@gmail.com">
          <img src={emailIcon} alt="Email" className="social-icon" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;