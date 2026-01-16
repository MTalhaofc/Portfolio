import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      title: "GearNexus Web Platform",
      description: "Full-stack e-commerce platform with modern UI/UX, product catalog, and secure payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/Gearnexusweb.png",
      liveUrl: "https://example.com/gearnexus-web",
      githubUrl: "https://github.com/username/gearnexus-web"
    },
    {
      title: "GearNexus Mobile",
      description: "Mobile version of GearNexus e-commerce platform with optimized mobile experience and native features.",
      tags: ["React Native", "Redux", "Firebase", "Stripe"],
      image: "/images/GearNexus.png",
      liveUrl: "https://example.com/gearnexus-mobile",
      githubUrl: "https://github.com/username/gearnexus-mobile"
    },
    {
      title: "EZ Health Web Portal",
      description: "Healthcare management web application for doctors and patients with appointment scheduling and medical records.",
      tags: ["React", "Node.js", "PostgreSQL", "JWT"],
      image: "/images/ez_health_web.png",
      liveUrl: "https://example.com/ezhealth-web",
      githubUrl: "https://github.com/username/ezhealth-web"
    },
    {
      title: "EZ Health Mobile App",
      description: "Mobile healthcare app for patients with real-time notifications, telemedicine, and health tracking features.",
      tags: ["React Native", "Firebase", "WebRTC", "Push Notifications"],
      image: "/images/ez_health_mobile.png",
      liveUrl: "https://example.com/ezhealth-mobile",
      githubUrl: "https://github.com/username/ezhealth-mobile"
    },
    {
      title: "AI Text Summarizer",
      description: "AI-powered text summarization tool using advanced NLP models to generate concise summaries from documents.",
      tags: ["Python", "OpenAI", "React", "Flask"],
      image: "/images/ai_text_summarizer.png",
      liveUrl: "https://example.com/ai-summarizer",
      githubUrl: "https://github.com/username/ai-summarizer"
    },
    {
      title: "TTalks Communication Platform",
      description: "Real-time communication platform with video conferencing, instant messaging, and file sharing capabilities.",
      tags: ["React", "WebRTC", "Socket.io", "Node.js"],
      image: "/images/TTalks.png",
      liveUrl: "https://example.com/ttalks",
      githubUrl: "https://github.com/username/ttalks"
    },
    {
      title: "PaperSum Research Tool",
      description: "Academic research tool for document management with AI-powered summarization and citation tracking.",
      tags: ["React", "Python", "NLP", "PostgreSQL"],
      image: "/images/papersum1.png",
      liveUrl: "https://example.com/papersum",
      githubUrl: "https://github.com/username/papersum"
    },
    {
      title: "Notes App",
      description: "Simple and elegant note-taking application with markdown support, categories, and cloud synchronization.",
      tags: ["React", "Firebase", "Markdown", "PWA"],
      image: "/images/notesapp.png",
      liveUrl: "https://example.com/notes-app",
      githubUrl: "https://github.com/username/notes-app"
    },
    {
      title: "Group Project 2",
      description: "Collaborative project management tool with team coordination, task tracking, and progress visualization.",
      tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      image: "/images/Group 2.png",
      liveUrl: "https://example.com/group-project-2",
      githubUrl: "https://github.com/username/group-project-2"
    },
    {
      title: "Group Project 3",
      description: "Advanced team collaboration platform with real-time editing, version control, and project analytics.",
      tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
      image: "/images/Group 3.png",
      liveUrl: "https://example.com/group-project-3",
      githubUrl: "https://github.com/username/group-project-3"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
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
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevProject}>
            &#8249;
          </button>
          
          <div className="carousel-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className="project-card"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-image">
                  <img 
                    src={projects[currentProject].image} 
                    alt={projects[currentProject].title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x300/1a1a2e/4a9eff?text=${encodeURIComponent(projects[currentProject].title)}`;
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3>{projects[currentProject].title}</h3>
                  <p>{projects[currentProject].description}</p>
                  <div className="tech-tags">
                    {projects[currentProject].tags.map((tag, i) => (
                      <span key={i} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={projects[currentProject].liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                      View Live
                    </a>
                    <a href={projects[currentProject].githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button className="carousel-btn next" onClick={nextProject}>
            &#8250;
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProject ? 'active' : ''}`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
