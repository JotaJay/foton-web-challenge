import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { LoaderComponent } from "../../components/Loader";
import { AiOutlineSearch } from "react-icons/ai";
import { Background, Container, Header, Content, Center } from "./style";
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
  const maxResults = 9;

  useEffect(() => {
    /**
     * Se os livros não existirem?
     */
    const getBooks = async () => {
      try {
        const { data } = await api.get<QueryResponse>(
          `volumes?q=${title}&startIndex=${startIndex}&maxResults=${maxResults}`
        );
        setBooks(data.items);
        setTotalItems(data.totalItems);
      } catch (err) {
        console.log(err);
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
        setBooks(books.concat(data.items));
      } catch (err) {
        console.log(err);
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
                    <a href="/" className="linkToHome">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/books" className="linkToList">
                      List
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <input type="text" name="title" ref={register} />
            <button>
              <AiOutlineSearch size={32} />
            </button>
          </form>
        </Header>
        <Content>
          {books.length < 1 ? (
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
            <Button onClick={onLoadMoreClick}>Load more</Button>
          </Center>
        )}
      </Container>
    </Background>
  );
};

export default List;
