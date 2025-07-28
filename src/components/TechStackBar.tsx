import { motion } from "framer-motion";
import styles from "./TechStackBar.module.css";
import { useTranslation } from "react-i18next";

interface Technology {
  name: string;
  logo: string;
}

const technologies: Technology[] = [
  { name: "Java", logo: "/logos/java.svg" },
  { name: "SpringBoot", logo: "/logos/springboot.svg" },
  { name: "Maven", logo: "/logos/apachemaven.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Vite", logo: "/logos/vite.svg" },
  { name: "Node.js", logo: "/logos/nodedotjs.svg" },
  { name: "MySql", logo: "/logos/mysql.svg" },
  { name: "Redis", logo: "/logos/redis.svg" },
  { name: "Kafka", logo: "/logos/apachekafka.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Terraform", logo: "/logos/terraform.svg" },
  { name: "Jenkins", logo: "/logos/jenkins.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "Jira", logo: "/logos/jira.svg" },
];

export default function TechStackBar() {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t("tech.title")}</h3>
      <div className={styles.techBar}>
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            className={styles.logoWrapper}
            title={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img src={tech.logo} alt={tech.name} className={styles.logo} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
