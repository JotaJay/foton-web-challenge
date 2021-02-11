import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div``;

export const Content = styled.div`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  div {
    min-width: 200px;
  }

  img {
    display: block;
  }
`;
