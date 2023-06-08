import PropTypes from 'prop-types';
import { MessageStyled } from './Message.styled';

const Message = ({ message }) => {
  return <MessageStyled>{message}</MessageStyled>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
