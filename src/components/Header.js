import React from 'react';
import { motion } from 'framer-motion';
import profileImg from "../assets/mtalhaofc_image.png";

import './Header.css';

const Header = () => {
  return (
    <motion.header 
      className="header gradient-bg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.div 
          className="profile-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        >
   <img
  src={profileImg}
  alt="Muhammad Talha"
  className="profile-img"
/>
          </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Muhammad Talha
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Cloud Data Engineer | Backend Integerations
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;
