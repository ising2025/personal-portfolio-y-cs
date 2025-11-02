import React from "react";
import LeadershipCard from "./LeadershipCard";
import { motion } from "framer-motion";
import ABC from "../assets/ABCimg.png";
import Spot from "../assets/NJspot.png";
import Asbury from "../assets/Asbury.png";

function Media() {
  const mediaFeatures = [
    {
      title: "ABC & GMA",
      description:
        "Featured on ABC News, GMA, ABC’s The Year: 2024 for work on Girls Rule AI and promoting female education in AI.",
      image: ABC,
      link: "https://abcnews.go.com/GMA/Living/high-schooler-girls-studying-ai-built-company/story?id=116960875",
    },
    {
      title: "NJ PBS",
      description:
        "Featured on NJ Spotlight News in 2025 for work on Girls Rule AI.",
      image: Spot,
      link: "https://www.njspotlightnews.org/video/nj-teen-helps-girls-to-master-ai/",
    },
    {
      title: "Asbury Park Press",
      description:
        "Recognized for leadership in organizing tech outreach for middle school girls.",
      image: Asbury,
      link: "https://www.app.com/story/news/education/in-our-schools/2024/09/30/artificial-intelligence-teach-girls-rule-ai/75389567007/",
    },
  ];

  return (
    <motion.section className="full-section media-section" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      <h2>Media</h2>
      <div className="projects-grid">
        {mediaFeatures.map((m, i) => (
          <LeadershipCard
            key={i}
            title={m.title}
            description={m.description}
            image={m.image}
            link={m.link}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Media;