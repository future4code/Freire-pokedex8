import styled from "styled-components";

export const DetailsContainer = styled.div `
    width: 100%;
    min-height: 93.5vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 2rem 5%;
    background-color: #5E5E5E;
    font-family: 'Poppins', sans-serif;

    h1 {
        width: 100%;
        max-width: 1200px;
        box-sizing: border-box;
        padding: 0 2rem;
        color: #FFFFFF;
        font-weight: 700;
        margin: 1rem 0 3rem;

        @media (min-width: 1500px){
            max-width: 1400px;
        }
    }
`

export const DetailsModal = styled.section `
    width: 100%;
    max-width: 1200px;
    height: 663px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 3rem;
    background-color: #0e0e0e;

    @media (min-width: 1024px){
        flex-direction: row;
    }
    
    @media (min-width: 1500px){
        max-width: 1440px;
    }
`

export const ImagesContainer = styled.section `
    width: 100%;
    height: 25%;
    border-radius: 3rem 3rem 0 0;
    background-color: #FFFFFF;

    @media (min-width: 1024px){
        width: 25%;
        height: 100%;
        border-radius: 3rem 0 0 3rem;
    }

    img:first-child, img:last-child {
        background-color: #FFFFFF;
    }
`

export const StatsContainer = styled.section `
    width: 100%;
    height: 25%;
    background-color: #cccccc;

    @media (min-width: 1024px){
        width: 25%;
        height: 100%;
    }
`

export const MovesContainer = styled.section `
    width: 100%;
    height: 50%;
    background-color: #eeeeee;
    border-radius: 0 0 3rem 3rem;
    
    @media (min-width: 1024px){
        width: 50%;
        height: 100%;
        border-radius: 0 3rem 3rem 0;
    }
`