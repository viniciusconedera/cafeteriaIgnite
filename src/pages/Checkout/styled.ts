import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-top: 56px;

  @media (max-width: 1200px) {    
    display: flex;
    flex-direction: column;
  }
`;