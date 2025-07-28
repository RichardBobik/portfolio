import { useEffect } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import TechStackBar from "./components/TechStackBar";
import { projects } from "./data/Projects.ts";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import styles from "./App.module.css";
import "./i18n";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  useEffect(() => {
    // Ping the server URL to wake it up
    fetch("https://eye-know-api-2.onrender.com/").catch(() => {
      // Fail silently, no need to do anything on error
    });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header />
      <TechStackBar />
      <main className={styles.main}>
        <section className={styles.projectsIntro}>
          <h2>{t("projects.title")}</h2>
          <p>{t("projects.description")}</p>
        </section>

        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <ProjectCard key={idx} {...project} />
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
