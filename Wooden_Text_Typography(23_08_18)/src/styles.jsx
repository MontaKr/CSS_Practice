import styled, { createGlobalStyle } from "styled-components";
import bg from "./bg.jpg";
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: sans-serif;
    background: url(${bg});
    background-size: cover;
    background-attachment: fixed;
}
`;

export const Wrap = styled.div`
  h1 {
    position: relative;
    margin: 0;
    padding: 0;
    font-size: 10em;
    text-transform: uppercase;
    text-align: center;
    background: url(${bg});
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      text-shadow: -5px 5px 20px #000, -10px 10px 30px #000,
        -20px 15px 40px #000, -25px 20px 50px #000;
    }
  }
`;
