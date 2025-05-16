import React, { useState, useEffect } from 'react';
import './About.css';

const introText = 'Hi! I am Karthikeya,';
const typingText = 'A MERN stack developer ,';
const restText = ' coding and tech enthusiast. I love building web applications and exploring new technologies.';

function About() {
  const [intro, setIntro] = useState('');
  const [typing, setTyping] = useState('');
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    let introIdx = 0;
    let typingIdx = 0;
    let introCurrent = '';
    let typingCurrent = '';
    setIntro('');
    setTyping('');
    setShowRest(false);

    // Type the intro text
    const introInterval = setInterval(() => {
      if (introIdx < introText.length) {
        introCurrent += introText[introIdx];
        setIntro(introCurrent);
        introIdx++;
      } else {
        clearInterval(introInterval);
        // Start typing the typingText after a short delay
        setTimeout(() => {
          const typingInterval = setInterval(() => {
            if (typingIdx < typingText.length) {
              typingCurrent += typingText[typingIdx];
              setTyping(typingCurrent);
              typingIdx++;
            } else {
              clearInterval(typingInterval);
              setTimeout(() => setShowRest(true), 600);
            }
          }, 120);
        }, 600);
      }
    }, 100);
    return () => {
      clearInterval(introInterval);
    };
  }, []);

  return (
    <section className="about about-flex">
      <div className="about-photo">
        {/* Replace src with your photo path in /src/assets or a URL */}
        <img src="/src/assets/profile.jpg" alt="Karthikeya" className="profile-pic" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <div className="about-typing">
          <span>{intro}</span>
          <br />
          <span className="typing-highlight">{typing}</span>
          {showRest && <span>{restText}</span>}
          <span className="about-cursor">|</span>
        </div>
      </div>
    </section>
  );
}

export default About; 