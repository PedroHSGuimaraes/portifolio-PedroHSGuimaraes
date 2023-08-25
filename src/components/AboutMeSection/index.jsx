import styles from "./styles.module.css";

export const AboutMeSection = () => {
  return (
    <section className={styles.aboutMe__Section}>
      <div className={styles.aboutMe__Section__container}>
        <h2 className={styles.aboutMe__Section__title}>Sobre mim</h2>
        <p className={styles.aboutMe__Section__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
          magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam
          a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra,
          vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis
          ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
        </p>
      </div>
    </section>
  );
};
