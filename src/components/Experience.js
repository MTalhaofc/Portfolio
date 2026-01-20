import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "DB  Engineer",
      company: "Allied Bank HeadOffice Lahore",
      period: "Nov 2025 - Present",
      description: "Worked on SQL Server databases, writing and optimizing SQL queries, and managing Oracle databases for core banking systems within enterprise infrastructure, with strong team coordination.",
      achievements: [
        "Developed and optimized SQL queries on SQL Server databases",
        "Ensured data integrity, availability, and performance across production environments",
        "Collaborated with backend, infrastructure, and application teams for smooth operations"
      ]
    },
    {
      title: "Data Engineer Trainee",
      company: "Systems Limited Lahore",
      period: "Sep 2025 - Nov 2025",
      description: "Worked on data pipelines with Azure Data Factory and SSIS, supporting data architecture and Snowflake data warehouses, with BI reporting in Tableau.",
      achievements: [
        "Built and optimized ETL pipelines and contributed to data architecture and warehouse design.",
        "Designed and optimized Snowflake data warehouses for analytics workloads.",
        "Created Tableau dashboards delivering clear, actionable insights."
      ]
      
    }
    
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} className="achievement-icon" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
