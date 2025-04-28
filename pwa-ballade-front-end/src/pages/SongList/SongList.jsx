import songList from "../../data/SongList.json";
import styles from "./SongList.module.css";

function SongList() {
  return (
    <div className={styles.pageWrapper}>
      <h1>Liste des morceaux</h1>
      <ul>
        {songList.map((song, index) => (
          <li key={index}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
