import styled from 'styled-components';

export const IntroContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
    div {
      display: none;
    }
  }

  & > div {    
    margin-top: 5.875rem;
    display: flex;
    flex-direction: column;
    
    & h1 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    & p {
      font-family: 'Roboto';
      font-size: 1.25rem;
    }
  }

  & > img {
    margin-top: 5.75rem;
    width: 476px;
    height: 360px;
  }
`;

export const IconsGroup = styled.div`
  display: grid;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;

  & > div {
    display: flex;
    align-items: center;
  }
`;