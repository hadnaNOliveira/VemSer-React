import Item from '../Menu/Item';
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h4>Portfolio</h4>
      <Item />
    </div>
  )
}

export default Header;