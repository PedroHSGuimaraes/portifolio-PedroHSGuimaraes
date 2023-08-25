import styles from "./styles.module.css";
export const LinksNavBar = ({ text }) => {
  return (
    <li>
      <a className={styles.container} href="#">
        {text}
      </a>
    </li>
  );
};
