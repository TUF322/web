# Portfolio Web

Personal portfolio built with React — a terminal-inspired, dot-matrix themed site showcasing my projects and skills.

**Live:** [https://TUF322.github.io/web](https://TUF322.github.io/web)

## 🚀 Getting Started

### Install

```bash
npm install
```

### Run in Development

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build the project
- Create/update the `gh-pages` branch on GitHub
- Publish the site at `https://TUF322.github.io/web`

**Note:** If the repository name changes, update the `homepage` field in `package.json` before deploying.

## 🌐 Languages

The site supports **English** and **Portuguese**, switchable from the header. All copy lives in `src/context/LanguageContext.js` — edit the `translations` object to change any text in either language. The selected language is persisted in `localStorage`.

## 📝 Customization

### Projects

Edit `src/components/Projects.js` and modify the `projects` array (technologies, links, flags like `featured` or `inDevelopment`). Titles and descriptions live in `LanguageContext.js` under `projects.items`.

```javascript
const projects = [
  {
    key: 'myproject', // matches projects.items.myproject in LanguageContext.js
    technologies: ['React', 'CSS', 'JavaScript'],
    link: 'https://my-project.com',
    github: 'https://github.com/user/project',
    featured: true
  }
];
```

### Personal Info

- **Hero section**: `src/components/Hero.js` (typing animation + terminal window)
- **About me**: `src/components/About.js` (skills arrays) and `LanguageContext.js` (bio text)
- **Contact**: `src/components/Contact.js` — static contact cards (email, GitHub, LinkedIn); no backend needed

### Colors & Styles

Each component has its own CSS file. The palette:
- Accent: `#d501ff` (magenta)
- Background: `#000000`
- Font: DotMatrix (`src/fonts/DOTMATRI.TTF`), falling back to Courier New

## 📁 Structure

```
src/
├── components/
│   ├── Header.js       # Navigation + language switch
│   ├── Hero.js         # Intro with typing animation and terminal window
│   ├── About.js        # About me + skills
│   ├── Projects.js     # Project cards
│   ├── Contact.js      # Contact cards (email, GitHub, LinkedIn)
│   └── Footer.js       # Footer
├── context/
│   └── LanguageContext.js  # EN/PT translations + language state
├── App.js
└── index.js
```

## 🎨 Features

- ✅ Terminal / dot-matrix retro design
- ✅ English & Portuguese with persistent language switch
- ✅ Typing animation in the hero section
- ✅ Smooth scrolling between sections
- ✅ Static contact section (no backend required)
- ✅ Responsive and mobile-friendly
- ✅ Deployed on GitHub Pages

## 📄 License

This is a personal project, free to use and modify.
