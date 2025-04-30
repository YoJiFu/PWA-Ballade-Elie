import songList from "../../data/SongList.json";
import styles from "./SongList.module.css";
import music from "../../assets/icons/music.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function SongList() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const entryElements = songList.map((entry) => {
    return (
      <div key={entry.id} className={styles.songCard}>
        <div className={styles.cardHeader}>
          <img className={styles.icon} src={music} alt="Music icon" />
          <h2 className={styles.title}>{entry.title}</h2>
        </div>
        <div className={styles.cardBody}>
        <p>{t(entry.origin)}</p>
        <p>{t(entry.theme)}</p>
        <p>{t(entry.beneficiaries)}</p>
        <p>{t(entry.difficulty)}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.languageToggle}>
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="EN"
          onClick={() => changeLanguage("en")}
        />
        <img
          src="https://flagcdn.com/w40/fr.png"
          alt="FR"
          onClick={() => changeLanguage("fr")}
        />
      </div>

      <h1 className={styles.pageTitle}>{t("songList")}</h1>
      {entryElements}
    </div>
  );
}

export default SongList;
