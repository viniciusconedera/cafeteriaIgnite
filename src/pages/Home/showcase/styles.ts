import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  margin-top: 48px;
`;

export const ProductsList = styled.ul`
  margin-top: 54px;
  margin-left: 1%;
  display: grid;
  row-gap: 40px;
  column-gap: 32px;
  row-gap: 40px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);

      @media (max-width: 1200px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
  

  & > li {
    background-color: ${({theme}) => theme.card};
    width: 256px;
    height: 310px;
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
      margin-top: -20px;
      width: 120px;
      height: 120px;
    }

    & > div {
      margin-top: 12px;

      & > span {      
        background-color: ${({theme}) => theme.brandYellow};
        color: ${({theme}) => theme.brandYellowDark};
        padding: 6px;
        border-radius: 8px;
        font-family: 'Roboto';
        font-size: 0.675rem;

        &:not(:first-child) {
          margin-left: 8px;
        }
      }
    }

    & h2 {
      margin-top: 16px;
      font-weight: 700;
      color: ${({theme}) => theme.subtitle};
      line-height: 26px;
      font-size: 1.25rem;
    }

    & p {
      margin-top: 8px;
      padding: 0 8%;
      font-family: 'Roboto';
      font-weight: 400;
      line-height: 18.2px;
      font-size: 0.875rem;
      text-align: center;
    }    
  }
`;

export const CardActions = styled.div`
  display: flex;
  padding-top: 24px;

  & > h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-right: 24px;
    
    & span {
      color: ${({theme}) => theme.text};
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    background-color: ${({theme}) => theme.button};
    border-radius: 6px;
    margin-right: 8px;
    width: 72px;
    height: 38px;

    & button {
      background-color: ${({theme}) => theme.button};
      padding: 12px;
    }

    & span {
      background-color: ${({theme}) => theme.button};
      border: none;
      padding: 7px;
    }
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.brandPurpleDark};
    color: ${({theme}) => theme.buttonText} ;
    border-radius: 8px;
    padding: 8px;
    margin-left: 8px;
  }
`;