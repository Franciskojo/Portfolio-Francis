// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, 
  FaServer, FaCode, FaTools 
} from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "#61dafb"
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Middleware"],
      color: "#68a063"
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["Database Design", "SQL", "NoSQL", "MongoDB", "PostgreSQL"],
      color: "#336791"
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Postman", "Git", "Webpack", "NPM", "Testing"],
      color: "#de4c36"
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h2>Technical Expertise</h2>
          <p>Strong back-end development skills with comprehensive full-stack capabilities</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-category"
            >
              <div className="skill-header">
                <div 
                  className="skill-icon"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;