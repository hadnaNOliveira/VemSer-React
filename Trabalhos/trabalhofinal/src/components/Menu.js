import {Link} from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return(
    <div className={styles.menu}>
      <ul>
        <li><Link to="home">Home</Link></li>
        <li><Link to="saude">Saúde</Link></li>
        <li><Link to="tecnologia">Tecnologia</Link></li>
        <li><Link to="mundo">Mundo</Link></li>
        <li><Link to="ciencia">Ciência</Link></li>
      </ul>
    </div>
  );
}

export default Menu;