import { FaFacebook } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <h4>2021 Desenvolvido por Fernanda Oliveira</h4>
        <div className={styles.icons}>
        <ul>
          <li><FaFacebook /></li>
          <li><FaGithubAlt /></li>
          <li><FaLinkedin /></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;