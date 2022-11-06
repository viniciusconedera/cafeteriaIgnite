import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-top: 56px;

  @media (max-width: 1200px) {    
    display: flex;
    flex-direction: column;
  }

  & h1 {
    color: ${({theme}) => theme.brandYellowMedium};
    line-height: 1.5;
  }  
`;

export const CheckoutDetais = styled.div`
  margin-top: 2.5rem; 
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to bottom right, #DBAC2C, #8047F8) border-box;
  border: 4px solid transparent;
  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
  padding: 2.5rem;
  max-width: 75%;  

  & div:not(:first-child) {
    margin-top: 2rem;
  }

  & p {
    font-size: 1.25rem;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > div {
    margin-top: 1.75rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;