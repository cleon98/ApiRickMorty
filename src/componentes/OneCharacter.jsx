import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import {getOne} from "../services/getApi"

const OneCharacter = () =>{

    const [character, setCharacter] = useState ();
    const {charId, otroValor} = useParams()

    useEffect(() =>{
        getOne(charId).then (async (char) => setCharacter(char))
    }, [charId])

    setTimeout(() =>{

    console.log(otroValor)

    },2000)

return(
    <div>
        {
            character === undefined ? <p>Cargando...</p> :
            <div>
            <h1>{character.name}</h1>
          <img src={character.image} alt="" />
          <p>Status: {character.status}</p>
          <p>Specie: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Planet: {character.origin.name}</p>
            </div>
        }
    </div>

)
}
export default OneCharacter