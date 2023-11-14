import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: black;
    margin: 0;
  }
`;

export const Wrap = styled.div`
  .wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .items {
      width: 130%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);

      .item {
        width: 300px;
        height: 400px;
        margin: 10px;
        overflow: hidden;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.4);
        }
      }
    }

    .overlay {
      position: fixed;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(3px);
      background-color: rgba(0, 0, 0, 0.6);
      width: 100vw;
      height: 0vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-size: clamp(3rem, 8vw, 10rem);
      overflow: hidden;

      h1 {
        transform: scale(0);
      }
    }
  }
`;
