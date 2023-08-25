import { LinksNavBar } from "./LinksNavBar";

import styles from "./styles.module.css";

export const NavBar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <LinksNavBar text="Sobre" />
        <LinksNavBar text="Stack" />
        <LinksNavBar text="Projetos" />
      </ul>
    </nav>
  );
};
