import styled from "styled-components";

export const Container = styled.div`
  background: #ffe43b;
`;

export const Header = styled.div`
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
`;

export const Buttons = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const BuyButton = styled.button`
  padding: 6px 36px;
  margin-right: 8px;
  border-radius: 8px;
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
  padding: 6px 8px;

  transition: transform 0.2s;

  &:hover {
    transform: translateY(2px);
  }

  svg {
    margin-top: 4px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 14px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const Description = styled.div`
  max-width: 960px;
  padding: 40px 20px;
  margin: 0 auto;
  background: #fff;
`;
