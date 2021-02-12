import React, { useState, useEffect, FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { parseQueryString } from "../../utils/parseQueryString";

import { FiSearch } from "react-icons/fi";
import { Background, Container, Header, Content } from "./style";
import { useQueryParam, StringParam } from "use-query-params";

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
  const bookTitle = useLocation().search;
  const [queryString, setQueryString] = useQueryParam("title", StringParam);
  const { register, handleSubmit } = useForm();
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState(() => {
    if (bookTitle) {
      return parseQueryString(bookTitle).title;
    }
    return "";
  });

  useEffect(() => {
    getBooks();
  }, [search, queryString]);

  const onSubmit = (search: Record<string, string>) => {
    setQueryString(search.title);
    setSearch(search.title);
  };

  const getBooks = async () => {
    try {
      const response = await api.get<QueryResponse>(`volumes?q=${search}`);
      setBooks(response.data.items);
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
