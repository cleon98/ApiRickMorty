import { Link } from "react-router-dom"
const Navbar = () =>{
return(
    <header>
        {/* <img src="./imgs/logo.svg"></img> */}
        <nav>
            <Link to="/">Inicio</Link>
            <Link to='/characters'>Personajes</Link>
        </nav>
    </header>
)

}
export default Navbar