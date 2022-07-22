import React, { useContext } from "react";
import {
    CardPoke,
    Infos,
    PokeImg,
    CardDown,
    CardUp,
    ImgPokeBall,
    ImgPoke,
    DivType,
} from './style'
import PokeBall from '../assets/images/pokeball-image.png'
import GlobalStateContext from '../Context/GlobalStateContext';

const Card = ({ id, name, image, type }) => {
    const { states, setters } = useContext(GlobalStateContext)
    const { pokedex } = states;
    const { setPokedex } = setters;

    const addToPokedex = (newPokemon, index) => {
        const newPokedex = [...pokedex, newPokemon];
        states.allPokemons.splice(index, 1)
        const orderedPokedex = newPokedex.sort((a, b) => {
            return a.id - b.id;
        });
        setPokedex(orderedPokedex)
        alert(`${name} foi adicionado a sua pokedex`)
        console.log(newPokedex)
    }

    const removePokedex = (id) => {
        const newPokedex = pokedex.filter((pokemon) => {
            return pokemon.name !== id
        })
        setPokedex(newPokedex)

    }

    return (
        <div>
            <CardPoke backgroundColor={type}>
                <CardUp>
                    <Infos>
                        <p>#{id}</p>
                        <h3>{name}</h3>
                        <DivType backgroundColor={type}>
                            <p>{type}</p>
                        </DivType>
                    </Infos>
                    <PokeImg>
                        <ImgPokeBall src={PokeBall} />
                        <ImgPoke src={image} alt={name} />
                    </PokeImg>
                </CardUp>
                <CardDown>
                    <p>Detalhes</p>
                    {window.location.pathname === '/' ?
                        <button onClick={() => { addToPokedex(name) }}>Capturar!</button> : ''
                    }

                    {window.location.pathname === '/pokedex' ?
                        <button onClick={() => { removePokedex(id) }}>Remover!</button> : ''
                    }
                </CardDown>
            </CardPoke>
        </div>
    )
}
export default Card