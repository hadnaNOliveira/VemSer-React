import styles from "./Item.module.css";

function Item() {
  return (
    <div className={styles.item}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Item;