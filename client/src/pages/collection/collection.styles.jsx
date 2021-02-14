import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px){
    align-items: center;
  }
`;

export const CollectionTitle = styled.h1`
  font-size: 28px;
  margin: 25px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;