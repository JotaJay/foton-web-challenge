import React from "react";
import { useRouteMatch } from "react-router-dom";

interface QueryParams {
  book: string;
}

const Book: React.FC = () => {
  const { params } = useRouteMatch<QueryParams>();
  return (
    <>
      <h1>{params.book}</h1>
    </>
  );
};

export default Book;
