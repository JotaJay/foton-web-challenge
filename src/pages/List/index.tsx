import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { LoaderComponent } from "../../components/Loader";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Background,
  Container,
  Header,
  Content,
  Center,
  InputError,
} from "./style";
import Button from "../../components/Button";
import { useQueryParam, StringParam } from "use-query-params";

import "./burgerMenuStyle.css";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    author: string;
    imageLinks: { thumbnail: string };
  };
}

interface QueryResponse {
  totalItems: number;
  items: Book[];
}

const List: React.FC = () => {
  const [title, setTitle] = useQueryParam("title", StringParam);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title,
    },
  });
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [books, setBooks] = useState<Book[]>([]);
  const [inputError, setInputError] = useState("");

  const maxResults = 9;

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await api.get<QueryResponse>(
          `volumes?q=${title}&startIndex=${startIndex}&maxResults=${maxResults}`
        );
        setInputError("");
        setBooks(data.items);
        setTotalItems(data.totalItems);
      } catch (err) {
        setInputError("Oops...something went wrong");
      }
    };
    setBooks([]);
    getBooks();
  }, [title]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await api.get<QueryResponse>(
          `volumes?q=${title}&startIndex=${startIndex}&maxResults=${maxResults}`
        );
        setInputError("");
        setBooks(books.concat(data.items));
      } catch (err) {
        setInputError("Oops...something went wrong");
      }
    };
    getBooks();
  }, [startIndex]);

  const onSubmit = (search: Record<string, string>) => {
    setTitle(search.title);
  };

  const onLoadMoreClick = () => {
    const itemsLeft = totalItems - books.length;
    if (itemsLeft > 9) {
      setStartIndex(startIndex + 9);
      return;
    }

    setStartIndex(startIndex + itemsLeft);
  };

  return (
    <Background>
      <Container>
        <Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="dropdown">
              <span className="burgerMenu">
                <div className="burgerMenuBar"></div>
                <div className="burgerMenuBar"></div>
                <div className="burgerMenuBar"></div>
              </span>
              <div className="dropdown-content">
                <ul className="bugerMenuList">
                  <li>
                    <Link to="/" className="linkToHome">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <input
              type="text"
              name="title"
              ref={register}
              placeholder="Type a book title or genre"
            />
            <button>
              <AiOutlineSearch size={32} />
            </button>
          </form>
        </Header>
        {inputError && <InputError>{inputError}</InputError>}
        <Content>
          {!inputError && books.length < 1 ? (
            <LoaderComponent />
          ) : (
            books.map((book) => {
              return (
                <Link key={book.id} to={`/books/${book.id}`}>
                  <img
                    src={book?.volumeInfo?.imageLinks?.thumbnail}
                    alt={book?.volumeInfo?.title}
                  />
                </Link>
              );
            })
          )}
        </Content>
        {books?.length > 1 && totalItems > books.length && (
          <Center>
            <Button onClick={onLoadMoreClick}>Load More</Button>
          </Center>
        )}
      </Container>
    </Background>
  );
};

export default List;
