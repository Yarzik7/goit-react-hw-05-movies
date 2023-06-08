import styled from '@emotion/styled';

const GoBackBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  min-height: 30px;
  margin-bottom: 25px;

  border: none;
  background-color: #000;
  color: #fff;

  cursor: pointer;
`;

const MovieGenerallInfoStyled = styled.div`
  display: flex;
  gap: 30px;

  margin-bottom: 15px;
`;

const MovieTitleStyled = styled.h1`
  margin-bottom: 40px;
`;

const VoteAvarageStyled = styled.p`
  margin-bottom: 40px;
`;

const PartInfoContainerStyled = styled.div`
  margin-bottom: 40px;
`;

const InfoTitle = styled.h3`
  margin-bottom: 40px;
`;

const AddInfoContainerStyled = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
const AddInfoTitleStyled = styled.h2`
  margin-bottom: 20px;
`;

const InfoLinksListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GenresListStyled = styled.ul`
 display: flex;
 gap: 20px;
`

export {
  MovieGenerallInfoStyled,
  MovieTitleStyled,
  VoteAvarageStyled,
  PartInfoContainerStyled,
  InfoTitle,
  AddInfoContainerStyled,
  GoBackBtnStyled,
  AddInfoTitleStyled,
  InfoLinksListStyled,
  GenresListStyled,
};
