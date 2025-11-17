import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Netlify form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": form.getAttribute("name"),
        ...formData,
      }).toString(),
    })
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        alert("❌ Failed to send message. Try again later.");
        console.error("Form submission error:", error);
      });
  };

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="contact-header"
        >
          <h1>Get In Touch</h1>
          <p>Let's discuss your next project or opportunity</p>
        </motion.div>

        <div className="contact-content">
          {/* --- Contact Info Section --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h2>Contact Information</h2>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>franciskojoamekeh@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>+233 (544) 83-2798</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Nungua, Accra, Ghana</p>
              </div>
            </div>

            <div className="social-contact">
              <h3>Connect with me:</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/francis-amekeh-9361641b5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Franciskojo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- Contact Form Section --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-form"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field (anti-bot) */}
              <p style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
