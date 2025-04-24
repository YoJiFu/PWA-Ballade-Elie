import styles from "./Main.module.css";

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





 function HomePage() {

  return ( 
      <div className={styles.pageWrapper}> 
       <header className={styles.headerContent}>
                 
                 <div className={styles.loginIcon}> <img src={login} alt="login icon" /></div>
               
               <ul>
                  <li> <img className={styles.balladeLogo} src={balladeLogo} alt="Ballade logo"/> </li>
                  <li className={styles.musicCard}>
                      <h2 className={styles.cardTitle}>Liste des morceaux</h2>
                         <img className={styles.musicIcone} src={music} alt="music icon" />
                   </li>
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
            <li>< img src={youtube} alt="youtube icon" /> </li>
            <li> <img src={facebook} alt="facebook icon" /> </li>
            <li> <img src={instagram} alt="instagram icon" /> </li>
            <li> <img src={book} alt="book icon" /> </li>
      </ul>

     </footer>
    
     </div>
     )
 }


 export default HomePage 