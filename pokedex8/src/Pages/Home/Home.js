import React, { useContext } from "react";
import Header from "../../Components/Header";
import { PokemonContext } from "../../Context/PokemonContext";

export default function Home() {
    const {pokedex, setPokedex} = useContext(PokemonContext)
    console.log(pokedex)
    return (
        <div>
            <Header />
            <h2>HOME</h2>
            <h3>Todos os Pokemons</h3>
        </div>
    )
}