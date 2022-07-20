import React, { useEffect, useState } from "react";
import { DetailsContainer, DetailsModal, ImagesContainer, MovesContainer, StatsContainer } from "./styles";
import axios from 'axios';

// import PokeBallImage from '../../assets/images/pokeball-imag
function DetailsPokemon() {

    const [details, setDetails] = useState()
    const [types, setTypes] = useState()
    const [moves, setMoves] = useState()
    const [stats, setStats] = useState()

    const GetInfo = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/9`)

            .then((res) => {
                console.log(res.data)
                setDetails(res.data)
                setTypes(res.data.types)
                setMoves(res.data.moves.slice(0, 5))
                setStats(res.data.stats)
            })

            .catch((err) => {
                console.log(err.response.data);
            });
    }

    useEffect(() => {
        GetInfo();
    }, []);


    const listaTypes = (types && types.map(({type}) => {
        return <li key={type.name} > {type.name}</li>
    }))

    const listaMoves = (moves && moves.map(({move}) => {
        return <li key={move.name}>{move.name}</li>
    }))

    return (
        <DetailsContainer>
            <h1>Detalhes</h1>
            <DetailsModal>
                <ImagesContainer>
                    {/* <img src="" alt="front-image"/>
                        <img src="" alt="back-image"/> */}
                </ImagesContainer>

                <StatsContainer>
                        <h1>Base stats</h1>
                        {listaTypes}
                        
                </StatsContainer>

                <MovesContainer>
                        <h1>Moves</h1>
                        {listaMoves}
                </MovesContainer>
            </DetailsModal>

            {/* <button className={`${pokemon.taken ? "disabled" : ""}`} onClick={() => this.handleDetailsPokemon()} disabled={pokemon.taken}>Pegar Pokemon</button>
            <button type='' onClick={voltarTodosPokemons}>Todos Pokemons</button> */}

        </DetailsContainer>


    )
}

export default DetailsPokemon;