import axios from "axios";
import React, { useState } from "react"
import { URL_BASE } from "../Constants/url";


export default function Card() {
    const { states, setters, request } = useContext(PokemonContext)

    const [pokemonPhoto, setPokemonPhoto] = useState([]);
    const [id, setId] = useState(0);
    const [types, setTypes] = useState([]);

    let pokeName = states.pokemonList.map((poke) => {
        return poke.name
    })
    console.log(pokeName)

    const getInfos = () => {
        let url = `${URL_BASE}/${pokeName[0]}`
        console.log(url)
        axios
            .get(url)
            .then((response) => {
                setPokemonPhoto(response.data.sprites.other.dream_world.front_default)
                setId(response.data.id)
                setTypes(response.data.types)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getInfos();
      }, []);
      
    return (
        <div>        

        </div>
    )


}