import React from "react";
import { DivHeader, ButtonPokedex, DivHome, DivPokedex, DivText } from './style'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToHome } from "../Router/Cordinator";
import Logo from '../assets/images/logo.png'
import Arrow from '../assets/images/ArrowBack.png'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div>
            {window.location.pathname === '/' ?
                <DivHome>
                    <div></div>
                    <img src={Logo} />
                    <ButtonPokedex onClick={() => goToPokedex(navigate)}>Pokedex</ButtonPokedex>
                </DivHome> : ''}

            {window.location.pathname === '/pokedex' ?
                <DivPokedex>
                    <DivText>
                    <img src={Arrow} />
                    <p onClick={() => goToHome(navigate)}>Todos Pokémons</p>
                    </DivText>
                    <img src={Logo} />
                    <div></div>
                </DivPokedex> : ''}


            {window.location.pathname === '/details' ?
                <DivHeader>
                    <p onClick={() => goToHome(navigate)}>Todos Pokémons</p>
                    <img src={Logo} />
                    <button>Excluir</button>
                </DivHeader> : ''}
        </div>
    )
}