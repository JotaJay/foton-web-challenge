import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../services/api";
import { parseQueryString } from "../../utils/parseQueryString";

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

const List = () => {
  const title = useLocation().search;
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState(() => {
    if (title) {
      console.log("DEU");
      return parseQueryString(title);
    }
    console.log("deu nao");
    return "";
  });

  useEffect(() => {
    getBooks();
  }, [search]);

  const getBooks = async () => {
    try {
      const response = await api.get<QueryResponse>(`volumes?q=${search}`);
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
          {books.map((book) => {
            return (
              <Link key={book.id} to={`/books/${book.id}`}>
                <img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt={book?.volumeInfo?.title}
                />
              </Link>
            );
          })}
        </Content>
      </Container>
    </Background>
  );
};

export default List;
