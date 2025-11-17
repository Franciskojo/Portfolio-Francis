// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">
              Full Stack Developer
              <span className="highlight"> with Strong Backend Expertise</span>
            </h1>
            <p className="hero-description">
              I specialize in solving real world problems by building robust,
              scalable web applications with a focus on backend architecture.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>

            <div className="tech-stack">
              <h3>Tech Stack:</h3>
              <div className="stack-items">
                {[
                  "HTML5",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express.js",
                  "Python",
                  "MongoDB",
                  "PostgreSQL",
                ].map((tech) => (
                  <span key={tech} className="stack-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Franciskojo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="www.linkedin.com/in/francis-amekeh-9361641b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:franciskojoamekeh@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
