// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaMobile, FaShoppingCart } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing", "Order Management"],
      icon: <FaShoppingCart />,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Wholesale Management System",
      description: "Comprehensive wholesale management application for inventory tracking, order processing, and supplier management.",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "REST API"],
      features: ["Inventory Management", "Order Processing", "Supplier Portal", "Reporting Dashboard", "Bulk Operations"],
      icon: <FaDatabase />,
      category: "Back-end Heavy"
    },
    {
      id: 3,
      title: "Tali - Asset Tracking System",
      description: "Enterprise asset management system for tracking, managing, and monitoring company assets throughout their lifecycle.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "WebSockets"],
      features: ["Asset Tracking", "Maintenance Scheduling", "Depreciation Calculation", "Reporting", "Barcode Integration"],
      icon: <FaMobile />,
      category: "System Design"
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-header"
        >
          <h1>My Projects</h1>
          <p>Showcasing my expertise in building scalable web applications with strong back-end architecture</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-category">{project.category}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
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