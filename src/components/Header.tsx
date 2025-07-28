import { motion } from "framer-motion";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ja" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.topSection}>
        <div className={styles.imageWrapper}>
          <motion.img
            src="/me.jpeg"
            alt="Profile"
            className={styles.profileImage}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.name}>{t("header.name")}</h1>
          <h2 className={styles.title}>{t("header.title")}</h2>
        </div>
      </div>
      <p className={styles.bio}>{t("header.bio")}</p>

      <div className={styles.languageToggle}>
        <motion.button
          onClick={toggleLanguage}
          className={styles.languageButton}
          animate={{
            x: [0, -2, 2, -2, 2, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        >
          {i18n.language === "en" ? "🇯🇵 日本語" : "🇺🇸 English"}
        </motion.button>
      </div>
    </motion.header>
  );
}
