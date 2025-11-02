import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "'Automated Early Detection of Diabetic Retinopathy Using Deep Learning'",
      description: "Trained CNN and used ordinal regression to detect the severity of diabetic retinopathy in patient retinal scans. Created application that will show the severity of diabetic retinopathy based on the input retinal scan.",
      awards: "2024 New Jersey Academy of Science (1st place), 2024 Yale Science and Engineering Association Award, 2024 Delaware Valley Regional Science Fair (2nd place CS), 2024 Jersey Shore Science Fair (2nd place CS), 2024 MIT URTC Poster Presentation",
      link: "https://drive.google.com/file/d/1Te-Cc2S5zB3ctfw8dN2_y7K-qIiAci5S/view?usp=sharing"
    },
    {
      title: "'Improving Sign Language Translation to Text using Machine Learning'",
      description: "Augmented sign language dataset using novel SDG algorithm and trained LLM to translate between English and ASL. Created application that translates English text/audio to ASL videos.",
      awards: "2023 New Jersey Academy of Science (1st place), 2023 Delaware Valley Regional Science Fair (2nd place CS), 2023 Jersey Shore Science Fair (1st place CS), 2023 MIT URTC Poster Presentation",
      link: "https://tinyurl.com/ASLTranslator"
    },
    {
      title: "'Detection of Bullying Comments on TikTok'",
      description: "Used unsupervised learning (K-means clustering) and sentiment analysis to detect bullying comments on TikTok. Compared results with supervised learning method.",
      awards: "2022 Jersey Shore Science Fair (3rd place CS), 2022 Delaware Valley Regional Science Fair (Honorable Mention CS)",
      link: "https://drive.google.com/file/d/1BN50XFZfmfrJQCsvk9tsDN7NhYwUL0Ik/view"
    },
    {
      title: "Bloomberg Internship - Sprint Summarizer",
      description: "Created Python service that summarizes sprint data using LLMs during Bloomberg SWE internship (Feb-Jun 2025).",
      awards: "N/A",
      link: "https://drive.google.com/file/d/1kLHWXsmGljhTg_K7Awb2kZhCeNWS9y-W/view?usp=sharing"
    }
  ];

  return (
    <motion.section className="section" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      <h2>Projects</h2>
      <div>
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} link={p.link} awards={p.awards}/>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
