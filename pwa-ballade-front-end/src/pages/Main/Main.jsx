import styles from "./Main.module.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; // à créer si pas encore fait

import login from "../../assets/icons/login-icon.png";
import banniereBallade from "../../assets/icons/banniere-ballade.jpg";
import balladeSponsor from "../../assets/icons/ballade-sponsor.png";
import balladeLogo from "../../assets/icons/ballade-logo.png";

import book from "../../assets/icons/book.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import music from "../../assets/icons/music.png";
import map from "../../assets/icons/map-location.png";

function HomePage() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* BOUTONS LANGUE */}
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

      <header className={styles.headerContent}>
        <div className={styles.loginIcon}>
          <img src={login} alt="login icon" />
        </div>

        <ul>
          <li>
            <img className={styles.balladeLogo} src={balladeLogo} alt="Ballade logo" />
          </li>
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
        </ul>
      </header>

      <main>
        <div className={styles.balladeContent}>
          <img src={banniereBallade} alt="banniere Ballade" />
          <img src={balladeSponsor} alt="sponsors Ballade" />
        </div>
      </main>

      <footer className={styles.footerContent}>
        <ul className={styles.iconsContent}>
          <li>
            <a
              href="https://www.youtube.com/channel/UCMenlcxSCikSwN1Z2eYPpkg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/associationballade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/association_ballade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram icon" />
            </a>
          </li>
          <li>
            <img src={book} alt="book icon" />
          </li>
        </ul>

        <div className={styles.copyrightBallade}>© 2025 Association Ballade</div>
        <div className={styles.versionNumber}>v0.1</div>
      </footer>
    </div>
  );
}

export default HomePage;
