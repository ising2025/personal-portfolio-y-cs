import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section id="contact" className="section contact-section" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      <h2>Contact</h2>
      <p>Have a question or want to collaborate? Feel free to reach out!</p>

      <div className="contact-buttons">
        <motion.a
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          href="mailto:i.singh@yale.edu"
          className="contact-button"
        >
          Email
        </motion.a>

        <motion.a
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          href="https://www.linkedin.com/in/ishani-singh17"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          LinkedIn
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Contact;