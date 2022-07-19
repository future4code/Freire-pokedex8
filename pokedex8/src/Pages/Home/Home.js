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



    return (
        <div>
            <h2>HOME</h2>
            <h3>Todos os Pokemons</h3>
        </div>
    )
}