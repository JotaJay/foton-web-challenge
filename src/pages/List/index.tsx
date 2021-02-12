import React, { useState, useEffect, FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm();
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState(() => {
    if (title) {
      return parseQueryString(title);
    }
    return "";
  });

  useEffect(() => {
    getBooks();
  }, [search]);

  const onSubmit = (search: Record<string, string>) => {
    console.log(search);
    setSearch(search.title);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="title" ref={register} />
            <button>
              <FiSearch size={24} />
            </button>
          </form>
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
