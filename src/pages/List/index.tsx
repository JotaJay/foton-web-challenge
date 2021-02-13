import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import LeftSideBurgerMenu from '../../components/LeftSideBurgerMenu'

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

const List: React.FC = () => {
  const [title, setTitle] = useQueryParam("title", StringParam);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title,
    }
  });
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    /**
     * Se os livros não existirem?
     */
    const getBooks = async () => {
      try {
        const { data } = await api.get<QueryResponse>(`volumes?q=${title}`);
        setBooks(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getBooks();
  }, [title]);

  const onSubmit = (search: Record<string, string>) => {
    setTitle(search.title);
  };

  return (
    <LeftSideBurgerMenu>
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
            {books?.map((book) => {
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
    </LeftSideBurgerMenu>
  );
};

export default List;
