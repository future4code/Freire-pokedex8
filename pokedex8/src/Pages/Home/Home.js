
import React, { useEffect, useState, useContext } from "react";
import { PokemonContext } from "../../Context/PokemonContext";

export default function Home() {
    const {states, setters, request} = useContext(PokemonContext)

    useEffect(() => {
        request.getPokemons()
    })
    return (
        <div>
            <h2>HOME</h2>
            <h3>Todos os Pokemons</h3>
        </div>
    )
}