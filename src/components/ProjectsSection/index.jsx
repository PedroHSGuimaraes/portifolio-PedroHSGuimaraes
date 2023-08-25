import { ProjectsList } from "./ProjectsList";
import styles from "./styles.module.css";
export const ProjectsSection = () => {
  return (
    <section className={styles.projects__Section}>
      <h2 className={styles.projects__Section__title}>Projetos</h2>
      <ProjectsList />
    </section>
  );
};
