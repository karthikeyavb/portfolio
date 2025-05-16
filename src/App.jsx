import React, { useState } from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  const sections = ['About', 'Skills', 'Projects', 'Contact'];
  const [currentSection, setCurrentSection] = useState('About');

  return (
    <div className="space-bg">
      <header>
        <h1>Karthikeya's Portfolio</h1>
        <Navbar
          sections={sections}
          onSectionChange={setCurrentSection}
          currentSection={currentSection}
        />
      </header>
      <main>
        {currentSection === 'About' && <About />}
        {currentSection === 'Skills' && <Skills />}
        {currentSection === 'Projects' && <Projects />}
        {currentSection === 'Contact' && <Contact />}
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Karthikeya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
