import React from 'react';

function Navbar({ sections, onSectionChange, currentSection }) {
  return (
    <nav className="navbar">
      <ul>
        {sections.map((section) => (
          <li key={section} className={currentSection === section ? 'active' : ''}>
            <button onClick={() => onSectionChange(section)}>{section}</button>
          </li>
        ))}
        <li>
          <a
            href="/vbresume (8).pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 
