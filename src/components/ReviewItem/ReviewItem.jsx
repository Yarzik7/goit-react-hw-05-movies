import { ReviewItemStyled } from "./ReviewItem.styled";

const ReviewItem = ({ author, content }) => {
  return (
    <ReviewItemStyled>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </ReviewItemStyled>
  );
};

export default ReviewItem;
