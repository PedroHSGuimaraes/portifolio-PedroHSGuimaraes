import { TechList } from "./TechList";
import styles from "./styles.module.css";
export const TechSection = () => {
  return (
    <section className={styles.tech__Section}>
      <h2 className={styles.tech__Section__title}>Tecnologias</h2>
      <TechList />
    </section>
  );
};
