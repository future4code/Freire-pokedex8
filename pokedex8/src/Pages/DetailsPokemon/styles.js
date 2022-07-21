import styled from "styled-components";
import PokeballImage from '../../assets/images/pokeball-image.png'
import PokeballImageModal from '../../assets/images/pokeball-image-modal.svg'

export const DetailsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 2rem 5%;
    background-color: #5E5E5E;
    font-family: 'Poppins', sans-serif;
    position: relative;
    background-image: url(${PokeballImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .pokeball-background {
        position: absolute;
        height: 100%;
    }

    h1 {
        width: 100%;
        max-width: 1200px;
        box-sizing: border-box;
        padding: 0 1rem;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 48px;
        margin: 1rem 0 3rem;

        @media (min-width: 1500px){
            max-width: 1400px;
        }
    }
`

export const DetailsModal = styled.section`
    width: 100%;
    max-width: 1200px;
    height: 663px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => props.backgroundColor || "#729F92"};
    border-radius: 3rem;

    @media (min-width: 1024px){
        flex-direction: row;
    }
    
    @media (min-width: 1500px){
        max-width: 1440px;
    }
`

export const ImagesContainer = styled.section`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3rem 3rem 0 0;

    @media (min-width: 1024px){
        width: 25%;
        height: 100%;
        border-radius: 3rem 0 0 3rem;
    }

    img:first-child, img:last-child {
        background-color: #FFFFFF;
        border-radius: 8px;
        width: 79%;
    }

    img:first-child {
        margin: 0 0 3rem;
    }
`

export const StatsContainer = styled.section`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > section {
        height: 92.5%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        box-sizing: border-box;
        background-color: #FFFFFF;
        padding: 2rem;
        border-radius: 8px;

        h2 {
            margin: 0 0 1rem;
        }

        > span {
            min-width: 102px;
            text-align: end;
            font-size: 14px;
            margin: 10px 0 0;

            b {
                margin: 0 0 0 10px;
            }
        }
    }

    @media (min-width: 1024px){
        width: 25%;
        height: 100%;
    }
`

export const PokemonStats = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;

    span {
        margin: 0 20px 0 0;  
        font-size: 14px;

        &:first-child {
            min-width: 65px;
            text-align: end;
        }
    }

    .stat-bar {
        height: 15px;
        min-width: ${(props) => props.width || 0};
        background-color: ${(props) => props.statBarColor || "red"};
        border-radius: 5px;
    }
`

export const MovesContainer = styled.section`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 0 0 3rem 3rem;
    padding: 1.5rem 4rem;
    position: relative;
    background-image: url(${PokeballImageModal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    .fixed-pokemon {
        max-width: 350px;
        position: absolute;
        right: 0rem;
        top: -11rem;
    }

    > section {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        > p {
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }

        > h2 {
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 58px;
            color: #FFFFFF;
            text-transform: capitalize;
        }

        .types-container {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            margin: 10px 0 46px;
        }

        .moves-content {
            width: 100%;
            max-width: 292px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: #FFFFFF;
            border-radius: 8px; 
            padding: 18px;

            h2, p {
                margin: 0 0 20px;
            }
        }
    }
    
    @media (min-width: 1024px){
        width: 50%;
        height: 100%;
        border-radius: 0 3rem 3rem 0;
    }
`

export const MoveCard = styled.p `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    background: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    border-radius: 12px;
`

export const TypeCard = styled.span`
    width: auto;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.color};
    color: #f2f2f2;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    margin: 0 10px 0 0;
    text-transform: capitalize;

    img {
        margin: 0 10px 0 0;
    }
`