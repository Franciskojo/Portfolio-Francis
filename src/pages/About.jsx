// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaCode, FaTools } from 'react-icons/fa';
import "../styles/About.css"

const About = () => {
  const skills = [
    {
      category: 'Backend Development',
      icon: <FaServer />,
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Database Design']
    },
    {
      category: 'Frontend Development',
      icon: <FaCode />,
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', "Tailwind CSS"]
    },
    {
      category: 'Database & Tools',
      icon: <FaDatabase />,
      items: ['PostgreSQL', 'MongoDB', 'Postman', 'Git & Github', "Prisma ORM"]
    },
    {
      category: 'Other Skills',
      icon: <FaTools />,
      items: ['System Architecture', 'API Design', 'Performance Optimization', 'Security Best Practices']
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h1>About Me</h1>
          <p>Full Stack Developer with expertise in backend architecture and system design</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text"
          >
            <h2>Professional Summary</h2>
            <p>
              I am a passionate Full Stack Developer with strong backend expertise, 
              specializing in building scalable web applications. My experience spans 
              across various domains including e-commerce, wholesale management, 
              and enterprise asset tracking systems.
            </p>
            
            <p>
              With a deep understanding of system architecture and performance optimization, 
              I focus on creating robust backend solutions while ensuring seamless user 
              experiences through modern frontend technologies.
            </p>

            <h3>Key Strengths:</h3>
            <ul>
              <li>Strong backend architecture and API design</li>
              <li>Database design and optimization</li>
              <li>System integration and third-party API implementation</li>
              <li>Performance optimization and security implementation</li>
              <li>Agile development methodologies</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="skills-section"
          >
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.category} className="skill-category">
                  <div className="skill-header">
                    {skill.icon}
                    <h3>{skill.category}</h3>
                  </div>
                  <div className="skill-items">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;