import img from '../../components/images/garotaprogramadora.jpeg';
import styles from './Home.module.css';

function Home() {
  return(
    <div className={styles.home}>
      <h2>Sobre Mim</h2>
      <img width="400px" height="300px" src={img} alt="Programadora" />
    </div>
  )
}

export default Home;