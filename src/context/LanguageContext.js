import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am a',
      role: 'Developer',
      subtitle: 'full-stack // hybrid mobile',
      description:
        'I build web apps, cross-platform mobile apps (Flutter, Ionic) and multi-tenant SaaS platforms. From scientific tools for marine bioacoustics to complete management platforms.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact Me',
      terminalUser: 'dario@portfolio:~$',
      terminalCmd: 'cat about.json',
      statusKey: 'status',
      statusValue: 'studying_&_building',
      langsValue: "['English', 'Spanish', 'Portuguese']",
      scroll: 'scroll'
    },
    about: {
      title: 'About Me',
      p1: "I am a student at IPVC - ESTG, currently finishing the CTeSP in TPSI (Programming and Information Systems Technologies), and preparing to apply for a bachelor's degree.",
      p2: 'Throughout my academic path and beyond it I have taken part in several internships, including summer internship programmes promoted by the Regional Government of Madeira: 10 months in total, across different projects and teams. Always ready to learn, to grow, and driven by endless curiosity.',
      viewProjects: 'View Projects',
      skillsTitle: 'Technologies & Tools',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        mobile: 'Mobile / Hybrid'
      }
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of projects I have developed, showcasing my skills and experience.',
      featured: 'Featured',
      inDevelopment: 'In Development',
      collaborators: 'Collaborators',
      viewProject: 'View project',
      viewCode: 'View code on GitHub',
      items: {
        concier: {
          title: 'Concierge - Multi-Tenant Training Platform',
          description:
            'Multi-tenant mobile platform for professional training management, developed during my internship at Valuedate.io (WeHandleData group). Three Flutter apps — Trainee, Trainer and Broker — share a single codebase over a Django REST backend, with dynamic domain resolution so the same code serves multiple training entities.',
          highlights: ['3 apps · 1 codebase', 'dynamic multi-tenancy', 'published on Google Play']
        },
        domu: {
          title: 'Domu - Property Management Platform',
          description:
            'Complete SaaS-level platform for tourism accommodation and maintenance management. Full architecture with BPMN, use cases, ER models and UML diagrams. Backend in Laravel + SQLite, frontend in Ionic + Angular with features for owners and companies.'
        },
        audio: {
          title: 'Audio Annotation - MARE Project',
          description:
            'React application for visualization, annotation and classification of marine fauna audio, developed for ARDITI MARE / MARE Project. Advanced WaveSurfer.js integration for waveform visualization, regions and markers. Dynamic annotation panel with spectrogram data and organized sidebar for events, objects and tags.'
        },
        attenda: {
          title: 'Attenda - Attendance Management Platform',
          description:
            'Simple and effective attendance management system for academic events. Fast QR-code check-in (under 10 seconds), no account needed for students, a clean dashboard for organizers and CSV export. Final MVP with a complete frontend/backend architecture.'
        },
        utask: {
          title: 'UTask - Task Management App',
          description:
            'Mobile application built with Ionic/Angular for managing tasks, projects and notes. Category management, project organization, calendar integration, notifications and local SQLite storage. Built with Capacitor for native mobile functionality.'
        },
        internship: {
          title: 'Dario Internship - Marine Bioacoustics',
          description:
            'Proof of concept developed during an internship at ARDITI MARE. React application using WaveSurfer.js for marine mammal sound analysis: waveform visualization, regions and annotations. Custom UI with vertical bar, controls and mockups prepared for future AI integration.'
        }
      }
    },
    contact: {
      title: 'Contact',
      subtitle:
        "Currently studying and heading into my bachelor's degree. Always happy to hear about interesting projects and opportunities.",
      emailLabel: 'email',
      githubLabel: 'github',
      linkedinLabel: 'linkedin'
    },
    footer: {
      reachOut: 'Feel free to reach out! Send me an email at',
      rights: 'All rights reserved.'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contacto'
    },
    hero: {
      greeting: 'Boas, eu sou',
      role: 'Developer',
      subtitle: 'full-stack // mobile híbrido',
      description:
        'Construo aplicações web, apps móveis multiplataforma (Flutter, Ionic) e plataformas SaaS multi-tenant. De ferramentas científicas para bioacústica marinha a plataformas de gestão completas.',
      ctaProjects: 'Ver Projetos',
      ctaContact: 'Contactar',
      terminalUser: 'dario@portfolio:~$',
      terminalCmd: 'cat about.json',
      statusKey: 'estado',
      statusValue: 'a_estudar_&_a_criar',
      langsValue: "['Inglês', 'Espanhol', 'Português']",
      scroll: 'scroll'
    },
    about: {
      title: 'Sobre Mim',
      p1: 'Sou estudante no IPVC - ESTG, a terminar o CTeSP de TPSI (Tecnologias de Programação e Sistemas de Informação), e vou candidatar-me à licenciatura.',
      p2: 'Ao longo do meu percurso académico e fora dele participei em vários estágios, incluindo programas de estágios de verão promovidos pelo Governo Regional da Madeira: um total de 10 meses em vários projetos e equipas diferentes. Sempre disposto a aprender, a crescer e com uma curiosidade interminável.',
      viewProjects: 'Ver Projetos',
      skillsTitle: 'Tecnologias & Ferramentas',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de Dados',
        mobile: 'Mobile / Híbrido'
      }
    },
    projects: {
      title: 'Os Meus Projetos',
      subtitle: 'Uma seleção de projetos que desenvolvi, que mostram as minhas competências e experiência.',
      featured: 'Destaque',
      inDevelopment: 'Em Desenvolvimento',
      collaborators: 'Colaboradores',
      viewProject: 'Ver projeto',
      viewCode: 'Ver código no GitHub',
      items: {
        concier: {
          title: 'Concierge - Plataforma Multi-Tenant de Formação',
          description:
            'Plataforma móvel multi-tenant de gestão de formação profissional, desenvolvida durante o estágio na Valuedate.io (grupo WeHandleData). Três apps Flutter — Formando, Formador e Angariador — partilham uma única base de código sobre um backend Django REST, com resolução dinâmica de domínio para o mesmo código servir várias entidades formadoras.',
          highlights: ['3 apps · 1 código-base', 'multi-tenant dinâmico', 'publicada na Google Play']
        },
        domu: {
          title: 'Domu - Plataforma de Gestão de Propriedades',
          description:
            'Plataforma completa de nível SaaS para gestão de alojamento turístico e manutenção. Arquitetura completa com BPMN, casos de uso, modelos ER e diagramas UML. Backend em Laravel + SQLite, frontend em Ionic + Angular com funcionalidades para proprietários e empresas.'
        },
        audio: {
          title: 'Audio Annotation - Projeto MARE',
          description:
            'Aplicação React para visualização, anotação e classificação de áudio de fauna marinha, desenvolvida para o ARDITI MARE / Projeto MARE. Integração avançada com WaveSurfer.js para visualização de waveforms, regiões e marcadores. Painel de anotação dinâmico com dados de espectrograma e sidebar organizada por eventos, objetos e tags.'
        },
        attenda: {
          title: 'Attenda - Plataforma de Gestão de Presenças',
          description:
            'Sistema simples e eficaz de gestão de presenças para eventos académicos. Check-in rápido via QR code (menos de 10 segundos), sem necessidade de conta para estudantes, dashboard simples para organizadores e exportação CSV. MVP final com arquitetura completa frontend/backend.'
        },
        utask: {
          title: 'UTask - App de Gestão de Tarefas',
          description:
            'Aplicação móvel desenvolvida com Ionic/Angular para gestão de tarefas, projetos e notas. Gestão de categorias, organização de projetos, integração com calendário, notificações e armazenamento local em SQLite. Construída com Capacitor para funcionalidades nativas.'
        },
        internship: {
          title: 'Dario Internship - Bioacústica Marinha',
          description:
            'Prova de conceito desenvolvida durante um estágio no ARDITI MARE. Aplicação React com WaveSurfer.js para análise de sons de mamíferos marinhos: visualização de waveforms, regiões e anotações. UI personalizada com barra vertical, controlos e mockups preparados para futura integração de IA.'
        }
      }
    },
    contact: {
      title: 'Contacto',
      subtitle:
        'De momento a estudar e a caminho da licenciatura. Estou sempre disponível para ouvir sobre projetos e oportunidades interessantes.',
      emailLabel: 'email',
      githubLabel: 'github',
      linkedinLabel: 'linkedin'
    },
    footer: {
      reachOut: 'Fala comigo! Envia-me um email para',
      rights: 'Todos os direitos reservados.'
    }
  }
};

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: translations.en
});

const getInitialLang = () => {
  try {
    const stored = window.localStorage.getItem('lang');
    if (stored === 'pt' || stored === 'en') return stored;
  } catch (e) {
    // localStorage unavailable — fall through to default
  }
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang);
    } catch (e) {
      // ignore
    }
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
