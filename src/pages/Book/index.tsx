import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Header, Content, Card, Description } from "./style";

interface QueryParams {
  book: string;
}

const Book: React.FC = () => {
  const { params } = useRouteMatch<QueryParams>();
  return (
    <>
      <Header></Header>
      <Content>
        <Card>
          <img
            src={
              "http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
          />
          <div>
            <strong>Descrição</strong>
            <p>autor</p>
          </div>
          <div>
            <span>paginas</span>
            <button>like</button>
            <button>favorite</button>
          </div>
        </Card>
        <Description>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium voluptate consequuntur quam iusto corrupti ex magni!
            Quae libero est ad architecto, quaerat sint obcaecati hic
            accusantium, repudiandae culpa qui quia!
          </div>
        </Description>
      </Content>
    </>
  );
};

export default Book;
