import PropTypes from 'prop-types';
import { ReviewItemStyled } from './ReviewItem.styled';

const ReviewItem = ({ author, content }) => {
  return (
    <ReviewItemStyled>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </ReviewItemStyled>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ReviewItem;
