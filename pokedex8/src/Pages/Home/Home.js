
import React, { useEffect, useContext } from "react";
import Card from "../../Components/Card";
import {
    DivFather,
    DivButtonLoad
} from './style'
import GlobalStateContext from '../../Context/GlobalStateContext';

export default function Home() {
    const { states, requests } = useContext(GlobalStateContext)

    const { allPokemons } = states;
    const { getAllPokemons } = requests;

    useEffect(() => {
        getAllPokemons()
    }, [])


    return (
        <div>
            <DivFather>
                {allPokemons.map((pokemon, index) =>
                    <Card
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        type={pokemon.types[0].type.name}
                    />
                )}
            </DivFather>
            <DivButtonLoad>
                <button onClick={() => getAllPokemons()}>Load More</button>
            </DivButtonLoad>
        </div>
    )
}