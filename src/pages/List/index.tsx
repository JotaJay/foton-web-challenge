import React, { useState } from "react";
import api from "../../services/api";

import { Container, Header, Content } from "./style";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    author: string;
    imageLinks: { thumbail: string };
  };
}

interface QueryResponse {
  items: Book[];
}

const List: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const getBooks = async () => {
    try {
      const query = "harry potter";
      const response = await api.get<QueryResponse>(`volumes?q=${query}`);
      const books = response.data;
      setBooks(books.items);
      console.log("books", books);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Header>
        <div>menu</div>
        <form>
          <input type="text" name="book" id="book" />
        </form>
        <button onClick={getBooks}>Search</button>
        <Content>
          <div>
            <img
              src="http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
          </div>
          {books?.map((book) => {
            <div>
              <img src={book.volumeInfo.imageLinks.thumbail} alt="" />
            </div>;
          })}
        </Content>
      </Header>
    </Container>
  );
};

export default List;
