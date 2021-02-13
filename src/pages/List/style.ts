import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #ffe43b;
`;

export const Container = styled.div`
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 42px;
  width: 100%;
  margin: 0 auto;

  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #c8d3d5;
    padding: 12px 8px;
  }

  button {
    border: 0;
    color: #c8d3d5;
    background: transparent;
  }

  form {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  div {
    min-width: 300px;
    margin-top: 32px;
  }

  a {
    width: 264px;
    margin-top: 48px;
    display: block;

    transition: trasnform 0.2s;

    &:hover {
      transform: translateX(20);
    }
  }

  img {
    display: block;
    width: 80%;
    margin: 0 auto;
    height: 300px;
  }
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
