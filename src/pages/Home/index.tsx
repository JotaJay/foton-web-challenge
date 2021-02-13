import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { Background, Container } from "./style";

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (search: Record<string, string>) => {
    if (search.book.trim().length < 1) {
      return;
    }
    history.push({
      pathname: "/books",
      search: `?title=${search.book.trim()}`,
    });
  };

  return (
    <Background>
      <Container>
        <h1>Foton Booky</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              name="book"
              ref={register}
              placeholder="Type a book title or genre"
            />
            <button>
              <AiOutlineSearch size={24} />
            </button>
          </div>
        </form>
      </Container>
    </Background>
  );
};

export default Home;
