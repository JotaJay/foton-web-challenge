import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: #ffe43b;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 64px;
    font-family: Ubuntu;
    font-weight: 700;
    text-transform: uppercase;
    color: #272727;
  }

  form {
    div {
      margin-top: 8px;
      background: #fff;
      border-radius: 16px;
      padding: 8px 8px;
    }
    input {
      border: 0;
      background: transparent;
      padding: 0 128px;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;

      &::placeholder {
        font-size: 12px;
      }
    }

    button {
      border: 0;
      background: transparent;

      svg {
        color: #747c92;
        margin-bottom: -8px;
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 32px;
      font-family: Ubuntu;
      font-weight: 700;
      text-transform: uppercase;
      color: #272727;
    }
    form {
      div {
        margin-top: 8px;
        background: #fff;
        border-radius: 16px;
        padding: 8px 4px;
      }
      input {
        border: 0;
        background: transparent;
        padding: 0 64px;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        font-size: 12px;

        &::placeholder {
          font-size: 8px;
        }
      }
    }
  }
`;
