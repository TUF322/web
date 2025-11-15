import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I am <span className="gradient-text">Developer</span>
          </h1>
        </div>
        <div className="hero-visual">
          <div className="vscode-window">
            <div className="vscode-titlebar">
              <div className="vscode-buttons">
                <span className="vscode-button close"></span>
                <span className="vscode-button minimize"></span>
                <span className="vscode-button maximize"></span>
              </div>
              <div className="vscode-title">about.js</div>
            </div>
            <div className="vscode-content">
              <div className="vscode-line">
                <span className="vscode-keyword">const</span> <span className="vscode-variable">about</span> = {'{'}
              </div>
              <div className="vscode-line indent">
                <span className="vscode-property">name</span>: <span className="vscode-string">'Jose Dario Gutierrez Gouveia'</span>,
              </div>
              <div className="vscode-line indent">
                <span className="vscode-property">role</span>: <span className="vscode-string">'Developer'</span>,
              </div>
              <div className="vscode-line indent">
                <span className="vscode-property">location</span>: <span className="vscode-string">'Portugal'</span>,
              </div>
              <div className="vscode-line indent">
                <span className="vscode-property">birthDate</span>: <span className="vscode-string">'26/06/2005'</span>,
              </div>
              <div className="vscode-line indent">
                <span className="vscode-property">languages</span>: [<span className="vscode-string">'English'</span>, <span className="vscode-string">'Spanish'</span>, <span className="vscode-string">'Portuguese'</span>]
              </div>
              <div className="vscode-line">{'}'};</div>
            </div>
          </div>
        </div>
      </div>
          <div className="scroll-indicator">
            scroll
          </div>
    </section>
  );
};

export default Hero;

