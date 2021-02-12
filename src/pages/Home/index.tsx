import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Background, Container } from "./style";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (book: Record<string, string>) => {
    history.push("/books", { book });
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
