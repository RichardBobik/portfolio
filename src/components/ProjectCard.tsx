import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  name: { [lang: string]: string };
  description: { [lang: string]: string };
  liveUrl?: string;
  repoUrl?: string;
  previewImages?: string[];
}

function isTouchDevice() {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
}

export default function ProjectCard({
  name,
  description,
  liveUrl,
  repoUrl,
  previewImages = [],
}: ProjectCardProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const touchDevice = isTouchDevice();

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHovered || previewImages.length === 0) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentImageIndex((idx) => (idx + 1) % previewImages.length);
    }, 1500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, previewImages]);

  const handleToggle = () => {
    if (touchDevice) {
      setIsHovered((prev) => !prev);
      setCurrentImageIndex(0);
    }
  };

  // Get localized name and description, fallback to English
  const localizedName = name[lang] || name["en"] || "";
  const localizedDescription = description[lang] || description["en"] || "";

  return (
    <div
      className={styles.card}
      onMouseEnter={() => !touchDevice && setIsHovered(true)}
      onMouseLeave={() => {
        if (!touchDevice) {
          setIsHovered(false);
          setCurrentImageIndex(0);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleToggle();
        }
      }}
    >
      <h3 className={styles.projectName}>{localizedName}</h3>

      <div className={styles.previewArea}>
        {isHovered && previewImages.length > 0 ? (
          <div className={styles.slideshowWrapper}>
            <img
              src={previewImages[currentImageIndex]}
              alt={`${localizedName} preview ${currentImageIndex + 1}`}
              className={styles.slideshowImage}
              loading="lazy"
            />
          </div>
        ) : (
          <p className={styles.description}>{localizedDescription}</p>
        )}
      </div>

      <div className={styles.buttons}>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}
