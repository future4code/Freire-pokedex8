import React from "react";
import { DivHeader } from './style'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToHome } from "../Router/Cordinator";

export default function Header() {
    const navigate = useNavigate()

    return (
        <div>
            {window.location.pathname === '/' ?
                <DivHeader>
                    <h3>Olá, sou o Header</h3>
                    <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
                </DivHeader> : ''}

            {window.location.pathname === '/pokedex' ?
                <DivHeader>
                    <button onClick={() => goToHome(navigate)}>Todos Pokémons</button>
                    <h3>Olá, sou o Header</h3>
                </DivHeader> : ''}


            {window.location.pathname === '/details' ?
                <DivHeader>
                    <button onClick={() => goToHome(navigate)}>Todos Pokémons</button>
                    <h3>Olá, sou o Header</h3>
                    <button>Excluir</button>
                </DivHeader> : ''}
        </div>
    )
}