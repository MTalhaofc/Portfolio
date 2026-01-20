import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faPython, faVuejs, faAngular, faDocker, faGithub, faAndroid, faJava, faPhp, faLaravel, faBootstrap, faHtml5, faCss3Alt, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFire, faCode, faExternalLinkAlt, faChevronLeft, faChevronRight, faServer, faMobile, faCloud } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const getTechIcon = (tech) => {
    const icons = {
      'React': { icon: faReact, color: '#61DAFB' },
      'React Native': { icon: faReact, color: '#61DAFB' },
      'Node.js': { icon: faNodeJs, color: '#339933' },
      'JavaScript': { icon: faJs, color: '#F7DF1E' },
      'Python': { icon: faPython, color: '#3776AB' },
      'Java': { icon: faJava, color: '#ED8B00' },
      'Android': { icon: faAndroid, color: '#3DDC84' },
      'Vue.js': { icon: faVuejs, color: '#4FC08D' },
      'Angular': { icon: faAngular, color: '#DD0031' },
      'Docker': { icon: faDocker, color: '#2496ED' },
      'PHP': { icon: faPhp, color: '#777BB4' },
      'Laravel': { icon: faLaravel, color: '#FF2D20' },
      'Bootstrap': { icon: faBootstrap, color: '#7952B3' },
      'HTML5': { icon: faHtml5, color: '#E34F26' },
      'CSS3': { icon: faCss3Alt, color: '#1572B6' },
      'AWS': { icon: faAws, color: '#FF9900' },
      'MongoDB': { icon: faDatabase, color: '#47A248' },
      'PostgreSQL': { icon: faDatabase, color: '#336791' },
      'MySQL': { icon: faDatabase, color: '#4479A1' },
      'Firebase': { icon: faFire, color: '#FFCA28' },
      'Express': { icon: faServer, color: '#000000' },
      'Spring Boot': { icon: faCode, color: '#6DB33F' },
      'Flutter': { icon: faMobile, color: '#02569B' },
      'Kotlin': { icon: faAndroid, color: '#7F52FF' },
      'Swift': { icon: faMobile, color: '#FA7343' },
      'Redux': { icon: faJs, color: '#764ABC' },
      'Stripe': { icon: faCode, color: '#635BFF' },
      'JWT': { icon: faCode, color: '#000000' },
      'WebRTC': { icon: faCode, color: '#FF6B6B' },
      'OpenAI': { icon: faCode, color: '#412991' },
      'Flask': { icon: faPython, color: '#000000' },
      'Socket.io': { icon: faNodeJs, color: '#010101' },
      'NLP': { icon: faCode, color: '#FF6B35' },
      'Markdown': { icon: faCode, color: '#083FA1' },
      'PWA': { icon: faCode, color: '#5A0FC8' },
      'Heroku': { icon: faCloud, color: '#430098' },
      'Netlify': { icon: faCloud, color: '#00C7B7' }
    };
    return icons[tech] || { icon: faCode, color: '#666666' };
  };
  
  const projects = [
    {
      title: "Ez Health Web",
      description:
        "Healthcare web platform for managing patients, appointments, and medical records with an intuitive UI.",
      tags: ["React", "Firebase", "AI", "Healthcare"],
      image: "/images/ez_health_web.png",
      githubUrl: "https://github.com/MTalhaofc/EzHealth",
    },
    {
      title: "CUI PaperSum",
      description:
        "Academic research tool that summarizes documents using NLP to help students and researchers save time.",
      tags: ["Python", "NLP", "AI"],
      image: "/images/papersum1.png",
      githubUrl: "https://github.com/MTalhaofc/cui_papersum",
    },
    {
      title: "Ez Health Mobile App",
      description:
        "Android healthcare application enabling users to manage health data and access medical services.",
      tags: ["Android", "Java", "Firebase"],
      image: "/images/ez_health_mobile.png",
      githubUrl: "https://github.com/MTalhaofc/Ez-Health-Android-App",
    },
    {
      title: "GearNexus Web",
      description:
        "E-commerce web platform for automotive accessories with modern UI and scalable structure.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/Gearnexusweb.png",
      githubUrl: "https://github.com/MTalhaofc/GearNexusWeb",
    },
    {
      title: "GearNexus Android App",
      description:
        "Android-based e-commerce application for browsing and purchasing automotive products.",
      tags: ["Android", "Java", "E-commerce"],
      image: "/images/GearNexus.png",
      githubUrl: "https://github.com/MTalhaofc/GearNexusApp-Android",
    },
    {
      title: "Carea",
      description:
        "Career-focused web application designed to support professional growth and skill development.",
      tags: ["Web App", "Frontend", "UI/UX"],
      image: "/images/Group 2.png",
      githubUrl: "https://github.com/MTalhaofc/Carea",
    },
    {
      title: "Notes App",
      description:
        "Lightweight Android notes application with a clean interface and local data persistence.",
      tags: ["Android", "Java", "SQLite"],
      image: "/images/notesapp.png",
      githubUrl: "https://github.com/MTalhaofc/Notesapp",
    },
    {
      title: "AI Text Summarizer",
      description:
        "AI-powered tool that converts long text into concise summaries using NLP techniques.",
      tags: ["Python", "AI", "NLP"],
      image: "/images/ai_text_summarizer.png",
      githubUrl: "https://github.com/MTalhaofc/AI_Text_Summarizer",
    },
    {
      title: "TTalks",
      description:
        "Real-time communication platform focused on messaging and collaboration.",
      tags: ["React", "Real-time", "Communication"],
      image: "/images/TTalks.png",
      githubUrl: "https://github.com/MTalhaofc/TTalks",
    },
  ];
  
  const getVisibleProjects = () => {
    const isMobile = window.innerWidth <= 768;
    const projectCount = isMobile ? 1 : 4;
    const visible = [];
    for (let i = 0; i < projectCount; i++) {
      const index = (currentProject + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-container">
          <div className="projects-carousel">
            <div className="projects-track">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  className="projects-slide"
                  initial={{ x: direction > 0 ? 100 : -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {getVisibleProjects().map((project, index) => (
                    <div
                      key={`${currentProject}-${index}`}
                      className="project-card"
                    >
                      <div className="project-image-container">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="project-image"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/400x200/1a1a2e/4a9eff?text=${encodeURIComponent(project.title)}`;
                          }}
                        />
                        <div className="project-overlay">
                          <div className="overlay-content">
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-tech">
                          {project.tags.map((tag, i) => {
                            const techIcon = getTechIcon(tag);
                            return (
                              <FontAwesomeIcon 
                                key={i}
                                icon={techIcon.icon} 
                                style={{ color: techIcon.color }}
                                className="tech-icon"
                                title={tag}
                              />
                            );
                          })}
                        </div>
                        
                        <div className="project-actions">
                          {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                            <span>Live Demo</span>
                          </a> */}
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                            <FontAwesomeIcon icon={faGithub} />
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="carousel-controls">
              <button className="carousel-nav" onClick={prevProject}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <div className="carousel-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentProject ? 'active' : ''}`}
                    onClick={() => setCurrentProject(index)}
                  />
                ))}
              </div>
              
              <button className="carousel-nav" onClick={nextProject}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
