import { NavBar } from "./NavBar";

import portifolio from "../../assets/portfolio.png";
import { Button } from "../Button";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={portifolio} alt="Logo do Portfólio" />
      <NavBar />
      <Button text="Contato" />
    </header>
  );
};
