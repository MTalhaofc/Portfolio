import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faCode, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  const skills = [
      {
        icon: faTools,
        title: "Tools & Platforms",
        description: "Power BI, Tableau, Azure Data Factory, SSIS, Snowflake, SQL Server, Oracle, Azure Blob Storage"
      },
      {
        icon: faCode,
        title: "Tech Stack",
        description: "Laravel, Python, SQL, REST APIs, MySQL, Android, Firebase, Auth Systems, Backend & API Development"
      },
      {
        icon: faChartLine,
        title: "Data Expertise",
        description: "ETL Development, Data Warehousing, Data Modeling, BI Reporting, Dashboard Development"
      }
    ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-icon">
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
