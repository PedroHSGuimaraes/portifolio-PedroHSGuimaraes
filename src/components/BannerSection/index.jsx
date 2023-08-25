import banner from "../../assets/banner-img.png";
import { username } from "../../data/user";
import { Button } from "../Button";
import styles from "./styles.module.css";
export const BannerSection = () => {
  return (
    <section className={styles.banner__Section}>
      <div className={styles.banner_section__container}>
        <h3 className={styles.banner_section__username}>{username}</h3>
        <h1 className={styles.banner_section__title}>
          Bem vindo ao meu portfólio{" "}
        </h1>
        <p className={styles.banner_section__description}>
          Uma frase interessante sobre mim
        </p>
        <Button text="Saiba mais" />
      </div>
      <div>
        <img
          src={banner}
          alt="Um notebook está posicionado no centro de uma mesa de trabalh"
        />
      </div>
    </section>
  );
};
