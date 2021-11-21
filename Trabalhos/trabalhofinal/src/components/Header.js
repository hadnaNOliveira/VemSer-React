import Menu from "./Menu";
import styles from "./Header.module.css";

function Header() {
  return(
  <div className={styles.header}>
    <div className="container">
      <div className={styles.content}>
        <a className={styles.logo} href="/">New York Times</a>
        <Menu />
      </div>
    </div>
  </div>
  );
}
export default Header;