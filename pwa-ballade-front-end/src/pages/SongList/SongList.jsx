import songList from '../../data/SongList.json';
import styles from './SongList.module.css';
import music from '../../assets/icons/music.png'; // L'icône utilisée pour toutes les cards

function SongList() {
  const entryElements = songList.map((entry) => {
    return (
      <div key={entry.id} className={styles.songCard}>
        <div className={styles.cardHeader}>
          <img className={styles.icon} src={music} alt="Music icon" />
          <h2 className={styles.title}>{entry.title}</h2>
        </div>
        <div className={styles.cardBody}>
          <p><strong>Origine :</strong> {entry.origin}</p>
          <p><strong>Thème :</strong> {entry.theme}</p>
          <p><strong>Bénéficiaires :</strong> {entry.beneficiaries}</p>
          <p><strong>Difficulté :</strong> {entry.difficulty}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Liste des morceaux</h1>
      {entryElements}
    </div>
  );
}

export default SongList;
