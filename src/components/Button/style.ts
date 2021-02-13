import styled from "styled-components";

export const Container = styled.button`
  margin-top: 32px;
  padding: 8px 30px;
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
