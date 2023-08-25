import { user } from "../../data/user";
import wppIcon from "../../assets/whatsapp-icon.png";
import gitIcon from "../../assets/github-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import styles from "./styles.module.css";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <h2 className={styles.text}>Contato</h2>
      <div className={styles.img}>
        <img src={wppIcon} alt="" />
        <img src={linkedinIcon} alt="" />
        <img src={gitIcon} alt="" />
      </div>
      <div className={styles.container__name}>
        <h3>Todos os direitos reservados - {user}</h3>
      </div>
    </footer>
  );
};
