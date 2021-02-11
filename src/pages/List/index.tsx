import React from "react";

import { Container, Header, Content } from "./style";

const List: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>menu</div>
        <form>
          <input type="text" name="book" id="book" />
          <button type="submit">Search</button>
        </form>
        <Content>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41OkEEJRkkL._SX333_BO1,204,203,200_.jpg"
              alt="Winning"
            />
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41OkEEJRkkL._SX333_BO1,204,203,200_.jpg"
              alt="Winning"
            />
          </div>
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/41OkEEJRkkL._SX333_BO1,204,203,200_.jpg"
              alt="Winning"
            />
          </div>
        </Content>
      </Header>
    </Container>
  );
};

export default List;
