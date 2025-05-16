import React, { useEffect, useState } from 'react';
import './Skills.css';

const skillsData = [
  { name: 'MongoDB', percent: 85 },
  { name: 'Express.js', percent: 80 },
  { name: 'React.js', percent: 90 },
  { name: 'Node.js', percent: 80 },
  { name: 'JavaScript (ES6+)', percent: 92 },
  { name: 'HTML5 & CSS3', percent: 88 },
  { name: 'Git & GitHub', percent: 85 },
  { name: 'REST APIs', percent: 80 },
];

const CIRCLE_SIZE = 110;
const STROKE_WIDTH = 10;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function Skills() {
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const intervals = skillsData.map((skill, i) =>
      setInterval(() => {
        setProgress((prev) => {
          const updated = [...prev];
          if (updated[i] < skill.percent) {
            updated[i] += 1;
          }
          return updated;
        });
      }, 15)
    );
    // Stop intervals when done
    const stopCheck = setInterval(() => {
      setProgress((prev) => {
        if (prev.every((val, i) => val >= skillsData[i].percent)) {
          intervals.forEach(clearInterval);
          clearInterval(stopCheck);
        }
        return prev;
      });
    }, 100);
    return () => {
      intervals.forEach(clearInterval);
      clearInterval(stopCheck);
    };
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-circles-list">
        {skillsData.map((skill, i) => {
          const percent = progress[i];
          const offset = CIRCUMFERENCE * (1 - percent / 100);
          return (
            <div className="skill-circle-container" key={skill.name}>
              <svg
                width={CIRCLE_SIZE}
                height={CIRCLE_SIZE}
                className="skill-svg"
              >
                <circle
                  className="skill-bg"
                  cx={CIRCLE_SIZE / 2}
                  cy={CIRCLE_SIZE / 2}
                  r={RADIUS}
                  strokeWidth={STROKE_WIDTH}
                  fill="none"
                />
                <circle
                  className="skill-fg"
                  cx={CIRCLE_SIZE / 2}
                  cy={CIRCLE_SIZE / 2}
                  r={RADIUS}
                  strokeWidth={STROKE_WIDTH}
                  fill="none"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={offset}
                  style={{ transition: 'stroke-dashoffset 0.3s cubic-bezier(0.4,0,0.2,1)' }}
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="skill-percent-text"
                >
                  {percent}%
                </text>
              </svg>
              <div className="skill-circle-label">{skill.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills; 