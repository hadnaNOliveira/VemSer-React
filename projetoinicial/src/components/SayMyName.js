import styles from './SayMyName.module.css';

function SayMyName({calcular, num, name}) {
  const numero = calcular(10);
  return(
    <div className={styles.sayMyName}>
      <p>Fala aí {name}</p>
      <h1>{numero}</h1>
      <div>
        <p className={styles.colorP}>dsuhushdusfdg</p>
      </div>
    </div>
  )
}

export default SayMyName;
