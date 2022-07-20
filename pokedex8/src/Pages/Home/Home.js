
import React, { useEffect, useState, useContext } from "react";
import { URL_BASE, URL_IMG } from "../../Constants/url";
import { PokemonContext } from "../../Context/PokemonContext";
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function Home() {
    const { states, setters, request } = useContext(PokemonContext)
    const params = useParams({});

    
    return (
        <div>
            {states.pokemonList && states.pokemonList.map((pokemon, id) => {
                return <div
                    key={id}
                    pokemon={pokemon}
                >
                    {pokemon.name}
                </div>
            })}
        </div>
    )
}