import React from 'react';
import './About.css';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.about.categories.frontend,
      skills: ['React.js', 'Ionic + Angular', 'HTML5 / CSS3 / SCSS', 'JavaScript', 'TypeScript']
    },
    {
      title: t.about.categories.backend,
      skills: ['Node.js + Express', 'Laravel (PHP)', 'Django (Python)', 'REST APIs + JWT Authentication']
    },
    {
      title: t.about.categories.databases,
      skills: ['MySQL', 'SQLite']
    },
    {
      title: t.about.categories.mobile,
      skills: ['Flutter + Dart', 'Ionic Framework', 'Angular Standalone/NgModule', 'Capacitor']
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <div className="about-buttons">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.about.viewProjects}
              </button>
            </div>
            <div className="skills-section">
              <h3 className="skills-title">{t.about.skillsTitle}</h3>
              <div className="skills-categories">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="skill-category">
                    <h4 className="category-title">{category.title}</h4>
                    <div className="skills-grid">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
