import getReviews from "api/getReviews";
import ReviewItem from "components/ReviewItem/ReviewItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsListStyled } from "./Reviews.styled";
import Message from "components/Message/Message";

const mapReviews = ({ id, author, content }) => (
  <ReviewItem
    key={id}
    author={author}
    content={content}
  />
);

const NOREVIEWSMESSAGE = "We don't have any reviews for this movie!"

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const responseResolved = reviews => {
        setReviews(reviews);
      };

      const responseRejected = error => {
        console.log(error.message);
      };

      getReviews(movieId).then(responseResolved).catch(responseRejected);
    }, [movieId]);

  return (
    <>
      {!!reviews.length ? (
        <ReviewsListStyled>{reviews.map(mapReviews)}</ReviewsListStyled>
      ) : (
        <Message message={NOREVIEWSMESSAGE} />
      )}
    </>
  );
};

export default Reviews;
