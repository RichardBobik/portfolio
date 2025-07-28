import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <p className={styles.invite}>{t("footer.invite")}</p>

      <div className={styles.contact}>
        <a href="mailto:richard.bobik@gmail.com">richard.bobik@gmail.com</a>
        <span>•</span>
        <a href="tel:+421948108063">+421 948 108 063</a>
      </div>

      <div className={styles.socials}>
        <a
          href="https://github.com/richardbobik"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <p className={styles.copy}>© 2025 Richard Bobik. {t("footer.rights")}</p>
    </motion.footer>
  );
}
