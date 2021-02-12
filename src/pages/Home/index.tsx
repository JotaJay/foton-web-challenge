import React from "react";
import { useForm } from "react-hook-form";
import { Background, Container } from "./style";

const Home = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    console.log(data);
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
