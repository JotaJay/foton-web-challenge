import React from "react";
import { useRouteMatch } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import {
  Container,
  Header,
  Content,
  Column,
  Card,
  Description,
  Buttons,
  BuyButton,
  FavoriteButton,
} from "./style";

interface QueryParams {
  book: string;
}

const Book: React.FC = () => {
  const { params } = useRouteMatch<QueryParams>();
  return (
    <>
      <Container>
        <Header></Header>
        <Content>
          <Card>
            <img
              src={
                "http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              }
            />
            <Column>
              <div>
                <strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, dignissimos!
                </strong>
                <p>autor</p>
              </div>

              <div>
                <strong>$9.99</strong>
                <span>STARS</span>
              </div>
            </Column>
          </Card>
          <Buttons>
            <span>paginas</span>
            <div>
              <BuyButton>Buy</BuyButton>
              <FavoriteButton>
                <FiHeart />
              </FavoriteButton>
            </div>
          </Buttons>
        </Content>
      </Container>
      <Description>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          voluptate consequuntur quam iusto corrupti ex magni! Quae libero est
          ad architecto, quaerat sint obcaecati hic accusantium, repudiandae
          culpa qui quia!
        </div>
      </Description>
    </>
  );
};

export default Book;
