import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { FiHeart, FiSearch } from "react-icons/fi";

import api from "../../services/api";
import { sanitizeString } from "../../utils/sanitizeString";

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
  bookId: string;
}

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: { thumbnail: string };
    description: string;
    authors: string[];
    printedPageCount: number;
    publisher: string;
    averageRating: number;
  };
  saleInfo: {
    listPrice: {
      amount: number;
    };
  };
}

const Book: React.FC = () => {
  const { params: { bookId } } = useRouteMatch<QueryParams>();
  const [book, setBook] = useState<Book | null>();

  useEffect(() => {
    /**
     * Se o livro não existir?
     */
    const getBookById = async () => {
      const { data } = await api.get<Book>(`volumes/${bookId}`);
      setBook(data)
    }
    getBookById()
  }, [bookId]);

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
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <Column>
                  <div>
                    <strong>{book.volumeInfo.title}</strong>
                    <p>
                      By{" "}
                      {book?.volumeInfo?.authors
                        ? book?.volumeInfo?.authors[0]
                        : book.volumeInfo.publisher}
                    </p>
                  </div>

                  <div>
                    <strong>
                      {book?.saleInfo?.listPrice
                        ? `$${book.saleInfo.listPrice.amount}`
                        : "Price unavailable"}
                    </strong>
                    <span>
                      {book?.volumeInfo?.averageRating
                        ? book?.volumeInfo?.averageRating
                        : 0}
                    </span>
                  </div>
                </Column>
              </Card>
              <Buttons>
                <span>{book?.volumeInfo?.printedPageCount} pages</span>
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
        {book && (
          <div>
            {book.volumeInfo.description
              ? sanitizeString(book.volumeInfo?.description)
              : "No description"}
          </div>
        )}
      </Description>
    </div>
  );
};

export default Book;
