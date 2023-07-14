import styled from "styled-components";

export const Wrap = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ededed;

  .road {
    position: relative;
    width: 700px;
    height: 150px;
    background: #333;
    border-radius: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 500px;
  }

  .road::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      #fff,
      #fff 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 50px;
    animation: animate_road 0.125s linear infinite;
  }

  .taxi {
    position: absolute;
    width: 200px;
    height: 80px;
    background: #f4b603;
    left: 50px;
    border-radius: 10px;
    box-shadow: -10px 10px rgba(0, 0, 0, 0.25);
    transform-style: preserve-3d;
    perspective: 500px;
    animation: animate_taxi 2s linear infinite;
    z-index: 10;
  }

  .taxi:nth-child(2) {
    left: initial;
    right: 150px;
    animation: animate_taxi 4s linear infinite;
    animation-delay: -1s;
    z-index: 9;
  }

  .taxi::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 2px;
    width: 5px;
    height: 15px;
    border-radius: 2px;
    background: #fc3c25;
    box-shadow: 0 42px #fc3c25;
  }

  .taxi::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 2px;
    width: 6px;
    height: 16px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0 44px #fff;
  }

  .taxi span {
    position: absolute;
    inset: 5px 10px;
    background: #fdd206;
    border-radius: 10px;
    overflow: hidden;
  }

  .taxi span::before {
    content: "Taxi";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    background: #fff;
    padding: 2px;
    font-size: 0.75em;
    font-weight: 1000;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 2px;
    box-shadow: 0 0 0 1px #0005;
    z-index: 10;
  }

  span b {
    position: absolute;
    inset: 0 30px;
    background: #111;
    border-radius: 10px;
  }

  span b::before {
    content: "";
    position: absolute;
    inset: 6px 25px;
    background: #fdd206;
    border-radius: 5px;
  }

  span b::after {
    content: "";
    position: absolute;
    inset: 0px 58px;
    background: #fdd206;
    border-radius: 5px;
  }

  span i {
    position: absolute;
    inset: 0;
  }

  span i::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 20px;
    width: 40px;
    height: 5px;
    background: #fdd206;
    transform-origin: right;
    transform: rotate(15deg);
    box-shadow: 100px 34px #fdd206;
  }

  span i::after {
    content: "";
    position: absolute;
    left: 20px;
    bottom: 7px;
    width: 40px;
    height: 5px;
    background: #fdd206;
    transform-origin: right;
    transform: rotate(-15deg);
    box-shadow: 100px -34px #fdd206;
  }

  .taxi .light_beam {
    position: absolute;
    top: 5px;
    right: -2px;
    width: 10px;
    height: 70px;
    background: #0002;
    border-radius: 15px;
    transform-style: preserve-3d;
  }

  .taxi .light_beam::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 150px;
    height: 16px;
    background: linear-gradient(90deg, #fff6ff, transparent);
    transform-origin: left;
    transform: perspective(500px) rotateY(-50deg);
  }

  .taxi .light_beam::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 150px;
    height: 16px;
    background: linear-gradient(90deg, #fff6ff, transparent);
    transform-origin: left;
    transform: perspective(500px) rotateY(-50deg);
  }

  @keyframes animate_road {
    0% {
      background-position: 50px 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  @keyframes animate_taxi {
    0% {
      transform: translateX(20px) translateY(-20px);
    }

    25% {
      transform: translateX(-10px) translateY(0px);
    }

    50% {
      transform: translateX(20px) translateY(20px);
    }

    75% {
      transform: translateX(-10px) translateY(0px);
    }

    100% {
      transform: translateX(20px) translateY(-20px);
    }
  }
`;
