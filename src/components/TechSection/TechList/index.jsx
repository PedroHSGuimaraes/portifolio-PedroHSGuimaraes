import { technologies } from "../../../data/technologies";
import styles from "./styles.module.css";

export const TechList = () => {
  return (
    <ul className={styles.container}>
      {technologies.map((tech) => {
        return (
          <li key={tech.name} className={styles.techItem}>
            <h3 className={styles.techName}>{tech.name}</h3>
            <img className={styles.techImage} src={tech.img} alt={tech.name} />
          </li>
        );
      })}
    </ul>
  );
};
