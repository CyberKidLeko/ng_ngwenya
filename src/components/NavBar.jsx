import React from 'react';
import ThemeToggle from './ThemeToggle';
import '../assets/styles/Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;