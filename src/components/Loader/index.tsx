import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from "./style";

export const LoaderComponent: React.FC = () => {
  return (
    <Container>
      <Loader type="ThreeDots" color="#ccc" height={100} width={100} />
    </Container>
  );
};
