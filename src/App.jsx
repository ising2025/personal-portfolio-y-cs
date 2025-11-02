import { useState } from 'react'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Leadership from "./components/Leadership.jsx";
import Media from "./components/Media";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
import './App.css';
import { motion } from "framer-motion";
import profile from './assets/IshaniS.png';
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <main>
        <motion.h2 class="main-title" animate={{ y: 10 }} transition={{ duration: 0.6 }}>
        About Me:
      </motion.h2>
      <h2 className="typewriter-text">
        <Typewriter
          words={[
            "NLP Enthusiast",
            "Woman in CS",
            "Founder",
            "Software Developer",
            "AI Teacher",
            "Dancer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={60}
          delaySpeed={1200}
        />
      </h2>
        <section id="about">
          <motion.img
                    src={profile}
                    alt="Profile"
                    height={200}
                    className="profile-img"
                    animate={{ scale: 1 }}
                    initial={{ scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                   whileHover={{scale: 1.05, borderColor: " #08806b", borderWidth: "4px",}}
                  />
          <About />
        </section>
        <section id="leadership">
          <Leadership />
        </section>
        <section id="media">
          <Media />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App
