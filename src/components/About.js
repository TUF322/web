import React from 'react';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Ionic + Angular', 'HTML5 / CSS3 / SCSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js + Express', 'Laravel (PHP)', 'APIs REST + JWT Authentication']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'SQLite']
    },
    {
      title: 'Mobile / Hybrid',
      skills: ['Ionic Framework', 'Angular Standalone/ngmodule']
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Developer focused on creating innovative digital solutions. Experience in scientific applications,
              SaaS platforms, and full-stack development. Worked on marine bioacoustics projects at ARDITI MARE.
            </p>
            <p>
              Welcome to my portfolio. Here you will find a selection of my projects,
              showcasing my skills in web development and design.
            </p>
            <div className="about-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </button>
            </div>
            <div className="about-visual">
              <div className="floating-card">
                <div className="card-content">
                  <div className="code-line"></div>
                  <div className="code-line short"></div>
                  <div className="code-line"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-section">
            <h3 className="skills-title">Technologies & Tools</h3>
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
    </section>
  );
};

export default About;

