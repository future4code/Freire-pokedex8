import styled from "styled-components";

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