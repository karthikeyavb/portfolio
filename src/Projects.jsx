import React, { useEffect, useState } from 'react';
import './Projects.css';

const projects = [
   {
    title: 'CVortex-ATS Friendly Resume',
    desc: 'An AI-powered web application built with the MERN stack to help users create and optimize resumes that successfully pass through Applicant Tracking Systems (ATS).',
    url: 'https://thecvortex.vercel.app/'
  },
      
   {
    title: 'Sorting Algorithms',
    desc: 'A website to visualize sorting algorithms.',
    url: 'https://sortingalgor.netlify.app/'
  },
  {
    title: 'Apeksha Learn',
    desc: 'A web app to explore and learn about the coding languages.',
    url: 'https://karthikeyavb.github.io/Apekshalearn/'
  },
  {
    title: 'Heart Match',
    desc: 'A matrimony site to search and become made for each other.',
    url: 'https://karthikeyavb.github.io/HeartMatch/'
  },
  {
    title: 'Rock Paper Scissor',
    desc: 'This is a simple rock paper scissor game built to check my skills',
    url: 'https://karthikeyavb.github.io/RPS_Game/'
  },
  {
    title: 'Job Portal',
    desc: 'It is a basic job portal website created to check and upgrade my css skills.',
    url: 'https://karthikeyavb.github.io/Job_Portal/'
  },
];

function Projects() {
  const [visible, setVisible] = useState(projects.map(() => false));

  useEffect(() => {
    projects.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 250 + i * 250);
    });
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, i) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card${visible[i] ? ' project-card-animated' : ' project-card-hidden'}`}
            key={project.title}
            style={{ transitionDelay: `${i * 120}ms`, textDecoration: 'none' }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects; 
