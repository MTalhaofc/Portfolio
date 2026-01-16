import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section gradient-bg">
      <div className="container">
        <motion.h2 
          className="section-title"
          style={{ color: 'white' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to discuss your next cloud project? Let's connect!
        </motion.p>
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="contact-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="icon">📧</span>
            <span>email@example.com</span>
          </motion.div>
          <motion.div 
            className="contact-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="icon">💼</span>
            <span>LinkedIn: /in/username</span>
          </motion.div>
          <motion.div 
            className="contact-item"
            whileHover={{ scale: 1.1 }}
          >
            <span className="icon">🐙</span>
            <span>GitHub: /username</span>
          </motion.div>
        </motion.div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Muhammad Talha. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
