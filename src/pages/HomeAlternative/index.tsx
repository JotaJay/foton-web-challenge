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
        <img
          src="https://i.pinimg.com/originals/13/c5/f4/13c5f407b6d2d04f1b43ec39936f012e.gif"
          alt="Foton Booky"
        />
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
