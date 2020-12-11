import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './imgs/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background: url(${bgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: white;
    }

    .score {
        color: white;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #6ed20e, #020400);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -mox-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px, 2px, #0085a3);
        font-size: 40px;
        text-align: center;
        margin:
    }
`; 