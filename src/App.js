import React from 'react';
import { motion } from 'framer-motion';
import { ImageCacheProvider } from './contexts/ImageCacheContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ImageCacheProvider>
      <div className="App">
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </div>
    </ImageCacheProvider>
  );
}

export default App;

