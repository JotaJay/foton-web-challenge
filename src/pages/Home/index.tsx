import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Background, Container } from "./style";

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (search: Record<string, string>) => {
    history.push({ pathname: "/books", search: `?title=${search.book}` });
  };

  return (
    <Background>
      <Container>
        <h1>FOTON BOOKY</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="book" ref={register} />
          <button>Search</button>
        </form>
      </Container>
    </Background>
  );
};

export default Home;
