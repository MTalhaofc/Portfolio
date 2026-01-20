import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faCalendarCheck, faBlog } from '@fortawesome/free-solid-svg-icons';
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
          Ready to discuss your next project? Let's connect!
        </motion.p>
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
        <a
  href="https://www.linkedin.com/in/mtalhaofc"
  target="_blank"
  rel="noreferrer"
>
  <motion.div
    className="contact-item"
    whileHover={{ scale: 1.1 }}
  >
    <FontAwesomeIcon icon={faLinkedin} className="contact-icon linkedin" />
    <span>LinkedIn</span>
  </motion.div>
</a>

<a
  href="https://github.com/MTalhaofc"
  target="_blank"
  rel="noreferrer"
>
  <motion.div
    className="contact-item"
    whileHover={{ scale: 1.1 }}
  >
    <FontAwesomeIcon icon={faGithub} className="contact-icon github" />
    <span>GitHub</span>
  </motion.div>
</a>

<a
  href="https://topmate.io/mtalhaofc"
  target="_blank"
  rel="noreferrer"
>
  <motion.div
    className="contact-item"
    whileHover={{ scale: 1.1 }}
  >
    <FontAwesomeIcon icon={faCalendarCheck} className="contact-icon topmate" />
    <span>Topmate</span>
  </motion.div>
</a>

<a
  href="https://medium.com/@mtalhaofc"
  rel="noreferrer"
>
  <motion.div
    className="contact-item"
    whileHover={{ scale: 1.1 }}
  >
    <FontAwesomeIcon icon={faBlog} className="contact-icon blog" />
    <span>Blog</span>
  </motion.div>
</a>

<a
  href="https://linktr.ee/mtalhaofc"
  target="_blank"
  rel="noreferrer"
>
  <motion.div
    className="contact-item"
    whileHover={{ scale: 1.1 }}
  >
    <FontAwesomeIcon icon={faLink} className="contact-icon linktree" />
    <span>Linktree</span>
  </motion.div>
</a>

        </motion.div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Muhammad Talha. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
