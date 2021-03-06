import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fff;
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
  }

  form {
    div {
      margin-top: 8px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid #ffe43b;
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
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 32px;
    }
    form {
      div {
        margin-top: 8px;
        background: #fff;
        border-radius: 16px;
        border: 1px solid #ffe43b;
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
