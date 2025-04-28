import home from "../../assets/icons/home-icon.png";
import login from "../../assets/icons/login-icon.png";
import globe from "../../assets/icons/globe.png";
import styles from './Nav.module.css'


 function Nav(){
    return(
         <div>
             <nav className={styles.navContent}>
                   
            
                    <ul> 
                        <li> <img src={home} alt="home icon"/> </li>
                        <li> <img src={globe} alt="globe icon"/> </li>
                        <li> <img src={login} alt="login icon"/> </li>
                    </ul>
                  
                  </nav>
         </div>
    )
}

export default Nav