import React from 'react';
import { useState, useEffect } from 'react';
import { URL_BASE } from '../Constants/url';
import GlobalStateContext from './GlobalStateContext';


const PokemonState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [detailsPokemon, setDetailsPokemon] = useState([])
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState(`${URL_BASE}?limit=20`)

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()


        setLoadMore(data.next)

        const createPokemonObject = (results) => {
            results.forEach(async (pokemon) => {
                const res = await fetch(`${URL_BASE}/${pokemon.name}`)
                const data = await res.json()
                console.log(allPokemons)

                setAllPokemons(currentList => [...currentList, data])
            });
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])


    const states = { pokedex, detailsPokemon, allPokemons }
    const setters = { setPokedex, setDetailsPokemon, setAllPokemons }
    const requests = { getAllPokemons }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default PokemonState
