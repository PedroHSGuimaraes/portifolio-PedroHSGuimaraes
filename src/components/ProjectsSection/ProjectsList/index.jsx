import { projects } from "../../../data/projects";
import styles from "./styles.module.css";
import gitIncon from "../../../assets/git-icon.png";
export const ProjectsList = () => {
  return (
    <ul className={styles.container}>
      {projects.map((project) => {
        return (
          <li key={project.name} className={styles.projectItem}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <img
              className={styles.projectImage}
              src={gitIncon}
              alt={project.name}
            />
            <p className={styles.projectDescription}>{project.description}</p>
            <a className={styles.projectAbout} href="#">
              Saiba mais
            </a>
          </li>
        );
      })}
    </ul>
  );
};
