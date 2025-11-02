import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section">

      <motion.div
        className="bio-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p>
          Hi! I’m <strong>Ishani Singh</strong>, a freshman at Yale University studying computer
          science and linguistics. I am an avid learner of NLP, AI, and CS! I love to create impactful, challenging projects. Additionally, 
          I enjoy leading initiatives to help bridge the gender gap in coding and AI. I am also a dancer and a tennis player! Scroll down to
          learn more!
        </p>
      </motion.div>
    </section>
  );
}

export default About;