import PropTypes from 'prop-types';
import { SectionStyles, SectionTitleStyled } from './Section.styled';
import { Container } from './Container/Container';

const Section = ({ children, title = '' }) => {
  return (
    <SectionStyles>
      <Container>
        {title && <SectionTitleStyled>{title}</SectionTitleStyled>}
        {children}
      </Container>
    </SectionStyles>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export {Section};