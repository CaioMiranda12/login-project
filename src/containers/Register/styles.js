import styled from "styled-components";

export const Container = styled.div`
    background-color: #F8F8F8;
    height: 100vh;
    width: 100vw;
    display: flex;

    img {
        height: 100vh;
        width: 50%;
    }
`

export const ContainerLogin = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    margin-top: 80px;

    div {
        display: flex;
        flex-direction: column;
    }
`

export const H1 = styled.h1`
    color: #030303;
    font-family: Poppins;
    font-size: 34px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.02px;
    text-transform: uppercase;
`

export const H2 = styled.h2`
    color: #636364;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.42px;
    margin-bottom: 40px;
    text-align: center;
`

export const Label = styled.p`
    color: #181818;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.42px;
    margin-left: 5px;
    margin-bottom: 5px;

`

export const Input = styled.input`
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background: rgba(196, 196, 196, 0.00);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    height: 40px;
    padding: 5px;
    width: 300px;
    color: #636364;
`

export const LoginButton = styled.button`
    border-radius: 12px;
    background: #EA454C;
    box-shadow: 0px 4px 10px 0px rgba(233, 68, 75, 0.25);
    border: none;
    height: 40px;

    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.42px;
    margin-top: 40px;
    cursor: pointer;
    width: 300px;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .6;
    }
`

export const P = styled.p`
    color: #595959;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.3px;
    margin-top: 15px;

    button {
        border: none;
        background-color: transparent;

        color: #EA454C;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.3px;
        font-size: 12px;
        cursor: pointer;
        
    }

`