import React from "react";
import { DetailsContainer, DetailsModal, ImagesContainer, MovesContainer, StatsContainer } from "./styles";

// import PokeBallImage from '../../assets/images/pokeball-imag

function DetailsPokemon() {
    // handleEscolherPokemon = async () => {
    //     const { escolherPokemon, pokemon } = this.props

    //     const confirmation = window.confirm("Já tem pokemon?");

    //     if (!confirmation) return;

    //     await this.handleTrocarStatus(pokemon.id, false)

    //     escolherPokemon()
    // }

    return (
        <DetailsContainer>
            <h1>Detalhes</h1>
            <DetailsModal>
                <ImagesContainer>
                    {/* <img src="" alt="front-image"/>
                        <img src="" alt="back-image"/> */}
                </ImagesContainer>

                <StatsContainer>

                </StatsContainer>

                <MovesContainer>

                </MovesContainer>
            </DetailsModal>

            <button className={`${pokemon.taken ? "disabled" : ""}`} onClick={() => this.handleDetailsPokemon()} disabled={pokemon.taken}>Pegar Pokemon</button>
            <button type='' onClick={voltarTodosPokemons}>Todos Pokemons</button>

        </DetailsContainer>


    )
}

export default DetailsPokemon;