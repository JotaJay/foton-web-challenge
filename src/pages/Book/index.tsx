import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import StarRatingComponent from "react-star-rating-component";
import { LoaderComponent } from "../../components/Loader";

import api from "../../services/api";
import { sanitizeString } from "../../utils/sanitizeString";

import {
  Container,
  Header,
  Content,
  Column,
  Card,
  Description,
  Buttons,
  BuyButton,
  FavoriteButton,
} from "./style";

interface QueryParams {
  bookId: string;
}

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: { thumbnail: string };
    description: string;
    authors: string[];
    printedPageCount: number;
    publisher: string;
    averageRating: number;
  };
  saleInfo: {
    listPrice: {
      amount: number;
    };
  };
}

const Book: React.FC = () => {
  const {
    params: { bookId },
  } = useRouteMatch<QueryParams>();
  const [book, setBook] = useState<Book | null>();
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    /**
     * Se o livro não existir?
     */
    const getBookById = async () => {
      const { data } = await api.get<Book>(`volumes/${bookId}`);
      setBook(data);
      setRating(data.volumeInfo.averageRating || 0);
    };
    getBookById();
  }, [bookId]);

  const setNewRating = (newValue: number) => {
    setRating(newValue);
  };

  const handleSetFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
      <Container>
        <Header>
          <AiOutlineArrowLeft size={26} />
          <form>
            <input type="text" name="book" id="book" />
          </form>
          <button>
            <AiOutlineSearch size={32} />
          </button>
        </Header>
        {!book ? (
          <LoaderComponent />
        ) : (
          <>
            <Content>
              <Card>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <Column>
                  <div>
                    <strong>{book.volumeInfo.title}</strong>
                    <p>
                      By{" "}
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors[0]
                        : book.volumeInfo.publisher}
                    </p>
                  </div>

                  <div>
                    <strong>
                      {book.saleInfo?.listPrice
                        ? `$${book.saleInfo.listPrice.amount}`
                        : "No price"}
                    </strong>
                    <span>
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={(newValue) => {
                          setNewRating(newValue);
                        }}
                        emptyStarColor={"#6e7271"}
                      />
                    </span>
                  </div>
                </Column>
              </Card>
              <Buttons>
                <span>{book.volumeInfo.printedPageCount} pages</span>
                <div>
                  <BuyButton>Buy</BuyButton>
                  <FavoriteButton onClick={handleSetFavorite}>
                    {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
                  </FavoriteButton>
                </div>
              </Buttons>
            </Content>
          </>
        )}
      </Container>
      <Description>
        {book && (
          <div>
            {book.volumeInfo.description
              ? sanitizeString(book.volumeInfo?.description)
              : "No description"}
          </div>
        )}
      </Description>
    </div>
  );
};

export default Book;
