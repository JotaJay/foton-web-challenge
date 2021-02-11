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
`;

export const FavoriteButton = styled.button`
  border: 0;
  background: transparent;
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
