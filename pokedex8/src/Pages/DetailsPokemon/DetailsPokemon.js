import React from "react";
import { DetailsContainer, DetailsModal, ImagesContainer, MovesContainer, StatsContainer } from "./styles";
// import PokeBallImage from '../../assets/images/pokeball-image.png'

export default function DetailsPokemon() {

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
        </DetailsContainer>
    )
}