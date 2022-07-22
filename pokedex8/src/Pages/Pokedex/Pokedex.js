import React, { useContext } from "react";
import Card from "../../Components/Card";
import GlobalStateContext from "../../Context/GlobalStateContext";

export default function Pokedex() {
    const { states } = useContext(GlobalStateContext);
    const { pokedex } = states;

    const showPokedex = pokedex && pokedex.map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} />


    })

    return (
        <div>
            <h3>Meus Pokemons</h3>
            {showPokedex}
        </div>
    )
}