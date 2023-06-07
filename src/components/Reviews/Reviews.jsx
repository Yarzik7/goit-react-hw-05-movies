import getReviews from "api/getReviews";
import ReviewItem from "components/ReviewItem/ReviewItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsListStyled } from "./Reviews.styled";

const mapReviews = ({ id, author, content }) => (
  <ReviewItem
    key={id}
    author={author}
    content={content}
  />
);

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

    return <ReviewsListStyled>{reviews.map(mapReviews)}</ReviewsListStyled>;
};

export default Reviews;
