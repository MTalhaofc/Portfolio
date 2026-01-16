import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    "Solutions Architect Associate",
    "DevOps Engineer Professional", 
    "SysOps Administrator",
    "Security Specialty"
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          AWS Certifications
        </motion.h2>
        <div className="certifications-grid">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              viewport={{ once: true }}
            >
              <h3>{cert}</h3>
              <p>AWS Certified</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
