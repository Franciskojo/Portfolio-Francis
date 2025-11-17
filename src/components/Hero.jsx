// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Full Stack Developer
            <span className="highlight"> with Strong Back-end Expertise</span>
          </h1>
          <p className="hero-description">
            I specialize in building robust, scalable web applications with a focus on 
            back-end architecture and system design. Experienced in e-commerce, 
            wholesale management, and asset tracking systems.
          </p>
          
          <div className="hero-buttons">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="btn btn-primary"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn btn-secondary"
            >
              Get In Touch
            </motion.a>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="code-content">
              <pre>{`// Back-end Specialist
const skills = {
  frontend: ['React', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express.js', 'REST APIs'],
  tools: ['Postman', 'Git', 'Database Design'],
  focus: 'Scalable Architecture'
};`}</pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;