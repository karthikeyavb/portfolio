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
      </ul>
    </nav>
  );
}

export default Navbar; 