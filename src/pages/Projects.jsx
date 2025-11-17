// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import "../styles/Projects.css";
import ecomm1 from "../assets/ecomm1.png";
import screenshot from "../assets/Screenshot.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Application',
      description: 'Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RESTFUL API'],
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & wishlist',
        'Payment gateway integration',
        'Order management system'
      ],
      image: ecomm1,
      liveUrl: 'https://hafarmsgh.com/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Tali - Asset Management System',
      description: 'Enterprise asset management and tracking system with real-time monitoring and reporting capabilities.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'Asset registration & categorization',
        'Real-time tracking',
        'Assignment of assets to users',
        'Depreciation calculations',
        'Custom reporting'
      ],
      image: screenshot,
      liveUrl: 'https://ps-tali.netlify.app/',
      githubUrl: 'https://github.com/PrimeStrategy-Ghana-LTD/BackEnd_PS-TALI'
    },

    {
      id: 2,
      title: 'Wholesale Management System',
      description: 'Comprehensive wholesale management application for inventory, orders, and customer relationship management.',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL',],
      features: [
        'Inventory management',
        'Order processing & tracking',
        'Customer management',
        'Reporting & analytics',
        'Multi-warehouse support'
      ],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#'
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <h1>My Projects</h1>
          <p>Showcasing my expertise in full-stack development with backend focus</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveUrl} className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;