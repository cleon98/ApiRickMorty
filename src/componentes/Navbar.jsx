import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import logo from "../imgs/Rick_and_Morty.png"
const Navbar = () =>{
return(
    <header className={styles.Navbar}>
        <img className="logo1" src={logo} alt="logo"></img>
        <nav className="navigation"> 
            <ul className="list"> 
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to='/characters'>Characters</Link></li>
            </ul>
        </nav>
    </header>
)

}
export default Navbar