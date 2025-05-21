import styles from "./Main.module.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
//import i18n from "../../i18n"; // à créer si pas encore fait
import banniereBallade from "../../assets/icons/banniere-ballade.jpg";
import balladeSponsor from "../../assets/icons/ballade-sponsor.png";

import book from "../../assets/icons/book.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import music from "../../assets/icons/music.png";
import map from "../../assets/icons/map-location.png";

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <main>
        <h2 className={styles.mobileTitle}>{t("welcome")}</h2>
        <h1 className={styles.balladeTitle}>{t("association")}</h1>

        <div className={styles.cardsContainer}>
          <Link to="/song-list" className={styles.musicCard}>
            <h2 className={styles.cardTitle}>{t("songList")}</h2>
            <img className={styles.musicIcon} src={music} alt="music icon" />
          </Link>

          <li className={styles.mapCard}>
            <h2 className={styles.mapTitle}>{t("songMap")}</h2>
            <img className={styles.mapIcon} src={map} alt="map icon" />
          </li>
        </div>
        <div className={styles.balladeContent}>
          <img src={banniereBallade} alt="banniere Ballade" />
          <img src={balladeSponsor} alt="sponsors Ballade" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
