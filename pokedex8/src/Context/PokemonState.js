import React from 'react';
import {useState} from 'react';
import { PokemonContext } from './PokemonContext';


export const PokemonState = (props) => {
    const [pokedex, setPokedex] = useState (['teste'])
    const [detailsPokemon, setDetailsPokemon] = useState([])

    return(
        <PokemonContext.Provider value = {{pokedex, setPokedex, detailsPokemon, setDetailsPokemon}}>
            {props.children}
        </PokemonContext.Provider>
    )
}
