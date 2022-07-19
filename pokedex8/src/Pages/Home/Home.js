
import React, { useEffect, useState } from "react";
// import axios from 'axios'

export default function Home() {

    // const pokemonsList = [pokemonList, setPokemonList] = useState('')

    // const getPokemons = () => {
    //     axios
    //         .get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
    //         .then((response) => {
    //             setPokemonList(response.data.results)
    //         })
    //         .catch((error) => {
    //             console.log(error.data.message)
    //         })
    // }

    // useEffect(() => {
    //     requests.getPokemons()
    // }, [])




import React, { useContext } from "react";
import Header from "../../Components/Header";
import { PokemonContext } from "../../Context/PokemonContext";

export default function Home() {
    const {pokedex, setPokedex} = useContext(PokemonContext)
    console.log(pokedex)

    return (
        <div>
            <h2>HOME</h2>
            <h3>Todos os Pokemons</h3>
        </div>
    )
}