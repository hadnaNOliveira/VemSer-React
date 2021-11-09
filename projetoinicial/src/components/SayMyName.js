import styles from './SayMyName.module.css';

function SayMyName(props) {
  return(
    <div className={styles.sayMyName}>
      <p>Fala aí {props.name}</p>
      <div>
        <p className={styles.colorP}>dsuhushdusfdg</p>
      </div>
    </div>
  )
}

export default SayMyName;
