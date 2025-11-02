import React from "react";
import LeadershipCard from "./LeadershipCard";
import GRAI from '../assets/GirlsRuleAILogo.png';
import cypher from "../assets/cypherLogo.png";
import reconx from "../assets/reconxLogo.png";
import { motion } from "framer-motion";

function Leadership() {
  const roles = [
    {
      title: "Founder — Girls Rule AI",
      description:
        "Founded an initiative to empower girls to learn the foundations of AI through free online courses. Have reached over 300 girls since 2021.",
      image: GRAI,
      link: 'https://www.girlsruleai.org',
    },
    {
      title: "Senior Lead — cypHER",
      description:
        "Led the annual coding workshop for middle school girls at High Technology High School in 2025. Taught coding, Arduino, & VEX Robotics to 100 girls in grades 6-8.",
      image: cypher,
      link: 'https://www.instagram.com/hthscypher/?hl=en',
    },
    {
      title: "President + VP — ReconX",
      description:
        "Led the research club at High Technology High School. Organized club meetings and speaker events, helped underclassmen prepare for science fairs. Record number of students competed at fairs during 2024.",
      image: reconx,
      link: 'https://sites.google.com/ctemc.org/hthsresearchshowcase/reconx',
    },
  ];

  return (
    <motion.section className="section" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      <h2>Leadership</h2>
      <div className="projects-grid">
        {roles.map((r, i) => (
          <LeadershipCard
            key={i}
            title={r.title}
            description={r.description}
            image={r.image}
            link={r.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Leadership;
