import React, {useState, useEffect} from "react";
import { DetailsContainer, DetailsModal, ImagesContainer, MovesContainer, PokemonStats, StatsContainer, TypeCard, MoveCard } from "./styles";
import { handleStatsDictionary, handleTypesDictionary } from "../../utils/dictionaries";
import axios from 'axios';

function DetailsPokemon() {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        handleGetPokemon()
    },[])

    const pokemonArr = Object.keys(pokemon)

    const handleGetPokemon = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
            
            setPokemon(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleRenderPokemonStats = () => {
        return pokemonArr.length > 0 && pokemon.stats.map((stat, index) => {
            return <PokemonStats key={index} width={`calc(${stat.base_stat}% / 2.5)`} statBarColor={handleTypesDictionary(pokemonArr.length > 0 && pokemon.types[0].type.name).color}>
                <span>{handleStatsDictionary(stat.stat.name)}</span> 
                <span><b>{stat.base_stat}</b></span> 
                <section className="stat-bar"/>
            </PokemonStats>
        })
    }

    const handleGetTotalStatsPoint = () => {
        let total = 0;

        pokemonArr.length > 0 && pokemon.stats.map((stat) => {
            return total = total + stat.base_stat;
        })

        return total;
    }

    const handleRenderId = () => {
        if(pokemonArr.length > 0 && pokemon.id < 10) return `0${pokemon.id}`
        return pokemon.id
    }

    const handleRenderTypes = () => {
        return pokemonArr.length > 0 && pokemon.types.map((type) => {

            const data = handleTypesDictionary(type.type.name)

            return <TypeCard key={type.slot} color={data.color}>
                <img src={data.image} alt={type.type.name} />
                {type.type.name}
            </TypeCard>
        })
    }

    const handleRenderMoves = () => {
        return pokemonArr.length > 0 && pokemon.moves.slice(0, 5).map((move) => {
            return <MoveCard key={move.move.name}>{move.move.name}</MoveCard>
        })
    }

    return (
        <DetailsContainer>
            <h1>Detalhes</h1>
            <DetailsModal backgroundColor={handleTypesDictionary(pokemonArr.length > 0 && pokemon.types[0].type.name).darkerColor}>
                <ImagesContainer>
                    { pokemonArr.length > 0 && <img src={pokemon.sprites.front_default} alt="frontimage"/>}
                    { pokemonArr.length > 0 && <img src={pokemon.sprites.back_default} alt="backimage"/>}
                </ImagesContainer>
                <StatsContainer>
                    <section>
                        <h2>Base stats</h2>
                        {handleRenderPokemonStats()}
                        <span>Total <b>{handleGetTotalStatsPoint()}</b></span>
                    </section>
                </StatsContainer>

                <MovesContainer>
                    <img className="fixed-pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonArr.length > 0 && pokemon.id}.png`} alt="pokemon"/>
                    <section>
                        <p>#{handleRenderId()}</p>
                        <h2>{pokemonArr.length > 0 && pokemon.name}</h2>
                        <section className="types-container">{handleRenderTypes()}</section>
                        <section className="moves-content">
                            <h2>Moves</h2>
                            {handleRenderMoves()}
                        </section>
                    </section>
                </MovesContainer>
            </DetailsModal>
        </DetailsContainer>


    )
}

export default DetailsPokemon;