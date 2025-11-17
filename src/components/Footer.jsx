// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const techStack = [
    'React', 'Node.js', 'Express.js', "Python", 'JavaScript',
    'HTML5', 'CSS3', 'Git&Github', "PHP", "MongoDB", "PostgreSQL"
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/Franciskojo',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'www.linkedin.com/in/francis-amekeh-9361641b5',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:franciskojoamekeh@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Back to Top Button */}
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <Link to="/" className="footer-brand">
              <FaCode className="brand-icon" />
              <span>Francis Kojo Amekeh</span>
            </Link>
            <p className="footer-description">
              Full Stack Developer specializing in robust backend solutions 
              and scalable web applications. Let's build something amazing together.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="footer-section">
            <h3 className="footer-title">Technologies</h3>
            <div className="tech-tags">
              {techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <p>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:your.email@example.com">
                  franciskojoamekeh@gmail.com
                </a>
              </p>
              <p>Open for new opportunities and collaborations</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Francis Kojo Amekeh. Made with{' '}
              <FaHeart className="heart-icon" /> using React
            </p>
            <p className="built-with">
              Built with modern technologies and best practices
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;