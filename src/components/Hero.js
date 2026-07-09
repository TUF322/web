import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [typedGreeting, setTypedGreeting] = useState('');
  const [typedRole, setTypedRole] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const greeting = t.hero.greeting;
    const role = t.hero.role;
    let i = 0;
    let cancelled = false;
    let timer;

    setTypedGreeting('');
    setTypedRole('');
    setTypingDone(false);

    const tick = () => {
      if (cancelled) return;
      i += 1;
      if (i <= greeting.length) {
        setTypedGreeting(greeting.slice(0, i));
        timer = setTimeout(tick, 40);
      } else if (i <= greeting.length + role.length) {
        setTypedRole(role.slice(0, i - greeting.length));
        timer = setTimeout(tick, 60);
      } else {
        setTypingDone(true);
      }
    };

    timer = setTimeout(tick, 300);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [t]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <h1 className="hero-title" aria-label={`${t.hero.greeting} ${t.hero.role}`}>
            {typedGreeting}
            {typedRole && ' '}
            <span className="gradient-text">{typedRole}</span>
            <span className={`typing-cursor ${typingDone ? 'blink' : ''}`}>_</span>
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              {t.hero.ctaProjects}
            </button>
            <a className="btn btn-secondary" href="mailto:jdgdg05@gmail.com">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">{t.hero.terminalUser.replace(':~$', '')} — bash</div>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="terminal-prompt">{t.hero.terminalUser}</span>{' '}
                <span className="terminal-cmd">{t.hero.terminalCmd}</span>
              </div>
              <div className="terminal-line">{'{'}</div>
              <div className="terminal-line indent">
                <span className="terminal-key">"name"</span>:{' '}
                <span className="terminal-string">"José Dário Gutierrez de Gouveia"</span>,
              </div>
              <div className="terminal-line indent">
                <span className="terminal-key">"role"</span>:{' '}
                <span className="terminal-string">"{t.hero.role}"</span>,
              </div>
              <div className="terminal-line indent">
                <span className="terminal-key">"location"</span>:{' '}
                <span className="terminal-string">"Portugal"</span>,
              </div>
              <div className="terminal-line indent">
                <span className="terminal-key">"languages"</span>:{' '}
                <span className="terminal-string">{t.hero.langsValue}</span>,
              </div>
              <div className="terminal-line indent">
                <span className="terminal-key">"{t.hero.statusKey}"</span>:{' '}
                <span className="terminal-status">"{t.hero.statusValue}"</span>
              </div>
              <div className="terminal-line">{'}'}</div>
              <div className="terminal-line">
                <span className="terminal-prompt">{t.hero.terminalUser}</span>{' '}
                <span className="terminal-cursor">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">{t.hero.scroll}</div>
    </section>
  );
};

export default Hero;
