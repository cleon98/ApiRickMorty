import {Link} from "react-router-dom"
import styles from "./Character.module.css"

export const Character = (props) => {
    const {name, status, species, image, gender,id} = props //destructurar

    return(
    <Link to={`/character/${id}`}>
        <section className={styles.cardCharacter}>
            <h2>{name}</h2>  
            <img src={image} alt={name}/>
        </section>
    </Link>
    )      
}


