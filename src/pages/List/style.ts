import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid lightgray;
    padding: 8px;
  }

  button {
    background: transparent;
    border: 0;
    color: lightgray;
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
    min-width: 300px;
    margin-top: 32px;
    display: block;
  }

  img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
`;
