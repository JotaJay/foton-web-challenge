import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary.main};
`;

export const Header = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 40px 16px 0 16px;

  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #747c92;
    padding: 8px;
    text-align: center;

    &::placeholder {
      font-size: 14px;
    }
  }

  button {
    background: transparent;
    border: 0;
    color: #747c92;
  }

  svg {
    color: #747c92;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
`;

export const Column = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;

  div {
    min-width: 190px;
  }

  p {
    margin-bottom: 18px;
    color: #6e7271;
    font-size: 14px;
  }

  div + div {
    width: 100%;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-size: 24px;
  }
`;

export const Buttons = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #6e7271;
    font-size: 14px;
  }
`;

export const BuyButton = styled.button`
  padding: 6px 30px;
  margin-right: 8px;
  border-radius: 12px;
  border: 0;
  background-color: #549ae6;
  color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  transition: transform 0.2s;

  &:hover {
    transform: translateY(2px);
  }
`;

export const FavoriteButton = styled.button`
  border: 0;
  background: #e05568;
  border-radius: 50%;
  color: #fff;
  padding: 2px 8px;

  transition: transform 0.2s;

  &:hover {
    transform: translateY(2px);
  }

  svg {
    margin-top: 6px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 160px;
    margin-right: 14px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  }

  div + div {
  }
`;

export const Description = styled.div`
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
  background: #fff;
`;
