import styles from './Card.module.css';
import img from '../semimagem.jpg';

function Card({item}) {
 
  return (
      <div className={styles.card}>
          <img width="300px" height="200px" src={item.multimedia ? item.multimedia[0].url : img } alt="notícia" />
        <div className={styles.conteudo}>
          <h2>{item.title ? item.title : "Sem título"}</h2>
          <h3>{item.byline ? item.byline : "Sem autoria"}</h3>
          <p>{item.published_date ? item.published_date : "Sem data"}</p>
          <p>{item.abstract ? item.abstract : "Sem descrição"}</p>
        </div>
      </div>
  );
}

export default Card;