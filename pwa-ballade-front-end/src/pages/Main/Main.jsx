import styles from "./Main.module.css"; // Assure-toi que le fichier CSS existe bien

import home from "../../assets/icons/home-icon.png";
import login from "../../assets/icons/login-icon.png";
import globe from "../../assets/icons/globe.png";
import banniereBallade from "../../assets/icons/banniere-ballade.jpg";
import balladeSponsor from "../../assets/icons/ballade-sponsor.png";
import balladeLogo from "../../assets/icons/ballade-logo.png";

import book from "../../assets/icons/book.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import music from "../../assets/icons/music.png";
import map from "../../assets/icons/map.png";

function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.headerContent}>
        <div className={styles.loginIcon}>
          <img src={login} alt="login icon" />
        </div>

        <ul>
          <li>
            <img className={styles.balladeLogo} src={balladeLogo} alt="Ballade logo" />
          </li>
          <h1 className={styles.balladeTitle}>Association Ballade</h1>

          {/* NOUVEAU BLOC SPECIAL POUR LES DEUX CARDS */}
          <div className={styles.cardsContainer}>
            <li className={styles.musicCard}>
              <h2 className={styles.cardTitle}>Liste des morceaux</h2>
              <img className={styles.musicIcon} src={music} alt="music icon" />
            </li>

            <li className={styles.mapCard}>
              <h2 className={styles.mapTitle}>Carte des morceaux</h2>
              <img className={styles.mapIcon} src={map} alt="map icon" />
            </li>
          </div>
          {/* FIN NOUVEAU BLOC */}
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
          <li><img src={youtube} alt="youtube icon" /></li>
          <li><img src={facebook} alt="facebook icon" /></li>
          <li><img src={instagram} alt="instagram icon" /></li>
          <li><img src={book} alt="book icon" /></li>
        </ul>

        <div className={styles.copyrightBallade}>© Association Ballade</div>
        <div className={styles.versionNumber}>v0.1.0</div>
      </footer>
    </div>
  );
}

export default HomePage;
