import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const contacts = [
  {
    label: 'Email',
    url: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl',
    icon: <FaEnvelope />, // react-icons
    display: 'vbkarthikeya29@gmail.com',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/karthikeyavb',
    icon: <FaGithub />, // react-icons
    display: 'github.com/karthikeyavb',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bala-karthikeya-08716b2b2/',
    icon: <FaLinkedin />, // react-icons
    display: 'linkedin.com/in/karthikeya',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/mr_karthikeya29/',
    icon: <FaInstagram />, // react-icons
    display: 'instagram.com/karthikeya',
  },
];

function Contact() {
  const [visible, setVisible] = useState(contacts.map(() => false));

  useEffect(() => {
    contacts.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 200 + i * 200);
    });
  }, []);

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p className="contact-intro">Feel free to reach out to me via any of the platforms below!</p>
      <div className="contact-list">
        {contacts.map((contact, i) => (
          <a
            href={contact.url}
            target={contact.url.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className={`contact-item${visible[i] ? ' contact-item-animated' : ' contact-item-hidden'}`}
            key={contact.label}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <span className="contact-icon">{contact.icon}</span>
            <span className="contact-label">{contact.display}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact; 