import musicIcon from '../../assets/icons/music.png';
import styles from './SongList.module.css'; // <-- à ajouter

function SongCard(props) {
  return (
    <article className={styles.songCard}>
      <div className={styles.cardContent}>
        <img src={musicIcon} alt="Icône de musique" className={styles.musicIcon} />
        <div className={styles.textContent}>
          <h2 className={styles.title}>{props.title}</h2>
          <p><strong>Origine :</strong> {props.origin}</p>
          <p><strong>Thème :</strong> {props.theme}</p>
          <p><strong>Bénéficiaires :</strong> {props.beneficiaries}</p>
          <p><strong>Difficulté :</strong> {props.difficulty}</p>
        </div>
      </div>
    </article>
  );
}

export default SongCard;
