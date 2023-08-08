import styled, { createGlobalStyle } from "styled-components";
import pixel from "./pixel.jpg";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #111;
  }
`;

export const Wrap = styled.div`
  .box {
    position: relative;
    width: 300px;
    height: 300px;

    span {
      position: absolute;
      width: 10px;
      height: 10px;
      background-size: 300px 300px;
      background: url(${pixel});
      background-repeat: no-repeat;
      animation: animate 10s linear infinite;
    }
  }

  @keyframes animate {
    0%,
    10% {
      scale: 1;
      rotate: 0deg;
      translate: 0, 0;
      transform-origin: center;
    }

    20%,
    30% {
      scale: 0.5;
      rotate: 0deg;
      translate: 0, 0;
      transform-origin: center;
    }

    40% {
      scale: 0.5;
      rotate: 360deg;
      translate: 150px, 0;
      transform-origin: 100px;
    }

    70% {
      scale: 0.5;
      rotate: 720deg;
      translate: -150px, 0;
      transform-origin: -100px;
    }

    90% {
      scale: 2.5;
      rotate: 0deg;
      translate: 0, 0;
      transform-origin: center;
    }

    100% {
      scale: 1;
      rotate: 0deg;
      translate: 0, 0;
      transform-origin: center;
    }
  }
`;
