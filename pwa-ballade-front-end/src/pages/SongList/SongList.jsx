import songList from "../../data/SongList.json";
import { Link } from "react-router-dom";
import styles from "./SongList.module.css";
import arrow from "../../assets/icons/arrow.svg";
import { useTranslation } from "react-i18next";
//import i18n from "../../i18n";

function SongList() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    //i18n.changeLanguage(lng);
  };

  const entryElements = songList.map((entry) => (
    <p key={entry.id} className={styles.songTitle}>
      {entry.title}
    </p>
  ));

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

      <Link to="/" className={styles.backArrow}>
        <img src={arrow} alt="Back arrow" />
      </Link>

      <h1 className={styles.pageTitle}>{t("songList")}</h1>
      <div>{entryElements}</div>
    </div>
  );
}

export default SongList;
