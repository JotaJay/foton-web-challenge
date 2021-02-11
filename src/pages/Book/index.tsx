import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { FiHeart, FiSearch } from "react-icons/fi";

import api from "../../services/api";

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

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: { thumbnail: string };
    description: string;
    authors: string[];
  };
}

const Book: React.FC = () => {
  const { params } = useRouteMatch<QueryParams>();
  const [book, setBook] = useState<Book | null>();

  useEffect(() => {
    api.get<Book>(`volumes/${params.book}`).then((response) => {
      setBook(response.data);
      console.log("oi", book);
    });
  }, [params.book]);

  const truncateString = (description: string): string => {
    if (description.length > 400) {
      return `${description.slice(0, 400)} ...`;
    }
    return description.slice(0, 400);
  };

  const sanitizeString = (string: string): string => {
    return string.replace(/<(.|\n)*?>/g, "");
  };

  return (
    <div>
      <Container>
        <Header>
          <div>menu</div>
          <form>
            <input type="text" name="book" id="book" />
          </form>
          <button>
            <FiSearch size={24} />
          </button>
        </Header>
        {book && (
          <>
            <Content>
              <Card>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <Column>
                  <div>
                    <strong>{book.volumeInfo.title}</strong>
                    <p>By {book?.volumeInfo?.authors[0]}</p>
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
          </>
        )}
      </Container>
      <Description>
        {book && <div>{sanitizeString(book.volumeInfo?.description)}</div>}
      </Description>
    </div>
  );
};

export default Book;
