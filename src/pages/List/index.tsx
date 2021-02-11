import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { FiSearch } from "react-icons/fi";
import { Background, Container, Header, Content } from "./style";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    author: string;
    imageLinks: { thumbnail: string };
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
      setBooks(response.data.items);
      console.log("books", books);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Background>
      <Container>
        <Header>
          <div>menu</div>
          <form>
            <input type="text" name="book" id="book" />
          </form>
          <button onClick={getBooks}>
            <FiSearch size={24} />
          </button>
        </Header>
        <Content>
          <Link to={`books/harrypotter`}>
            <img
              src="http://books.google.com/books/content?id=_rtFAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
          </Link>
          {books.map((book) => {
            <Link key={1} to={`/books/`}>
              <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />
            </Link>;
          })}
        </Content>
      </Container>
    </Background>
  );
};

export default List;
