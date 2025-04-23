import styles from "./Main.module.css";

import home from "../../assets/icons/home-icon.png";
import login from "../../assets/icons/login-icon.png";
import globe from "../../assets/icons/globe.png";
import banniereBallade from "../../assets/icons/banniere-ballade.jpg";
import balladeSponsor from "../../assets/icons/ballade-sponsor.png";
import balladeLogo from "../../assets/icons/ballade-logo.png";





 function Main() {

  return ( 
     <div> 
      <nav className={styles.navContent}>
       

        <ul> 
            <li> <img src={home} alt="home icon"/> </li>
            <li> <img src={globe} alt="globe icon"/> </li>
            <li> <img src={login} alt="login icon"/> </li>
        </ul>
      
      </nav>
     
     <main>

      <div className={styles.balladeContent}>
            <img src={banniereBallade} alt="" />
            <img src={balladeSponsor} alt="" />



      </div>
      

     </main>
    
     </div>
     )
 }


 export default Main 