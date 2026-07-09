import React from 'react';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'jdgdg05@gmail.com';
const GITHUB = 'https://github.com/TUF322';
const LINKEDIN = 'https://www.linkedin.com/in/jos%C3%A9-dario-gouveia-0143b3311/';

const Contact = () => {
  const { t } = useLanguage();

  const items = [
    { label: t.contact.emailLabel, value: EMAIL, href: `mailto:${EMAIL}` },
    { label: t.contact.githubLabel, value: 'github.com/TUF322', href: GITHUB, external: true },
    { label: t.contact.linkedinLabel, value: 'José Dario Gouveia', href: LINKEDIN, external: true }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>
        <div className="contact-grid">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-card"
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
