import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  div {
    min-width: 300px;
  }

  img {
    display: block;
    width: 80%;
    margin: 0 auto;
  }
`;
