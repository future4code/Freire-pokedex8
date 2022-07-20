import React from 'react';
import { useState, useEffect } from 'react';
import { URL_BASE } from '../Constants/url';
import { PokemonContext } from './PokemonContext';
import axios from 'axios'
import { useParams } from 'react-router-dom';


export const PokemonState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [detailsPokemon, setDetailsPokemon] = useState([])
    const [pokemonList, setPokemonList] = useState([])

    const getPokemons = () => {
        axios
            .get(URL_BASE)
            .then((response) => {
                setPokemonList(response.data.results)
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }

    useEffect(() => {
        requests.getPokemons();
    }, []);

    const states = { pokemonList, pokedex, detailsPokemon }
    const setters = { setPokemonList, setPokedex, setDetailsPokemon }
    const requests = { getPokemons }

    const data = { states, setters, requests }

    return (
        <PokemonContext.Provider value={data}>
            {props.children}
        </PokemonContext.Provider>
    )
}
