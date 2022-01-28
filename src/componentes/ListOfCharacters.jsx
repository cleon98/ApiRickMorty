import { useState, useEffect } from "react"
import { getApi } from "../services/getApi"
import { Character } from "./Character";
import styles from "./ListOfCharacters.module.css"
// import Button from "./Button/Button"

const ListOfCharacters = () => {
    const [characters, setCharacters] = useState ([]);
    const [page, setPage] = useState(1);

    useEffect(() =>{
            getApi(page).then( async (character) => setCharacters(character))  
    }, [page])

    const next = () => {
        setCharacters([])
        setPage( page + 1)
    }

    const back = () => {
        setCharacters([])
        setPage( page - 1)
    }
    if (page < 1 || page > 42){
     alert("Nothing here, let me take you to the last site you visited");
    }

    return(
        <>
        <button onClick={back}>‹</button>
        <button onClick={next}>›</button>

        <ul className={styles.grid} className="cardsStyle">
        {characters.map(({id, name, image, gender, species, status}) => (
        <Character name={name} image={image} gender={gender} species={species} status={status} id={id} key={id}/>
        ))}  
        </ul> 
        </>
    )
}

export default ListOfCharacters