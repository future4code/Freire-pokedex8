import styled from "styled-components";
import PokeBall from '../assets/images/pokeball-image.png'


export const DivHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 160px;

    p {
        font-size: 24px;
        text-decoration-line: underline;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const DivHome = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    height: 160px;
`;

export const DivText = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left:100px;
`;

export const DivPokedex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    height: 160px;
    p {        
        font-size: 24px;
        text-decoration-line: underline;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const ButtonPokedex = styled.button`
    color: #FFFFFF;
    background-color: #33A4F5;
    border: none;
    font-size: 24px;
    height: 74px;
    width: 278px;
    border-radius: 8px;
    cursor: pointer;
`;

export const CardPoke = styled.div`
    margin-top: 30px;
    align-items: center;
    width: 440px;
    height: 210px;
    border-radius: 12px;
    background-color: ${(props) => {
        switch (props.backgroundColor) {
            case "grass":
                return '#729F92';
            case 'poison':
                return '#AD61AE';
            case 'fire':
                return '#EAAB7D';
            case 'water':
                return '#71C3FF';
            case 'bug':
                return '#76A866;';
            case 'flying':
                return '#BF9762';
            case 'normal':
                return '#BF9762';
        }
    }};
`;

export const CardUp = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Infos = styled.div`
    color: #FFFFFF;
    font-weight: bold;
`;

export const DivType = styled.div`
    width: 91px;
    height: 31px;
    background-color: ${(props) => {
        switch (props.backgroundColor) {
            case "grass":
                return '#70B873';
            case 'poison':
                return '#AD61AE';
            case 'fire':
                return '#F44900';
            case 'water':
                return '#33A4F5';
            case 'bug':
                return '#316520';
            case 'flying':
                return '#6892B0';
            case 'normal':
                return '#8A8A8A';
        }
    }};
    border: 1px dashed #FFFFFF;
    border-radius: 8px;

    p {
        text-align: center;
        margin-top: 2px;
    }
`;

export const PokeImg = styled.div`
    display: flex;
    flex-direction: column-reverse;
`;

export const ImgPokeBall = styled.img`
    height: 250px;
    width: 250px;
    margin-top: -20px;
    margin-right: -90px;
`;

export const ImgPoke = styled.img`
    position: absolute;
    margin-top: -110px;
    margin-left: 50px;
    height: 150px;
    width: 150px;
`;

export const CardDown = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -90px;

    p {
        color: #FFFFFF;
        font-size: 16px;
        text-decoration-line: underline;
        font-weight: bold;
        cursor: pointer;
    }

    button {
        width: 146px;
        height: 38px;
        background: #FFFFFF;
        border-radius: 8px;
        border: none;
        color: #0F0F0F;
        font-size: 16px;
        cursor: pointer;
    }
`;

