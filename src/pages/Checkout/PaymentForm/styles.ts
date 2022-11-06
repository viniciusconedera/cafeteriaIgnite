import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  margin-right: 32px;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({theme}) => theme.subtitle};
  }
`;

export const AdressForm = styled.div`  
  margin-top: 32px;  

  & > main {    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    padding: 40px;
    background-color: ${({theme}) => theme.card};
    border-radius: 12px;

    @media (max-width: 1200px) {    
      display: flex;
      flex-direction: column;
    }
    
    header {
      display: flex;
      align-items: center;
      margin-bottom: 32px;

      & svg {
        color: ${({theme}) => theme.brandYellowMedium};
        font-size: 24px;
      }
      
      & div {
        margin-left: 16px;
        color: ${({theme}) => theme.subtitle};
        font-family: 'Roboto';
        line-height: 1.5rem;
      }
    }

    input {
      border: none;
      border-radius: 4px;
      padding: 12px;
      height: 42px;
      background-color: ${({theme}) => theme.button};
    }

    #header {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    
    #code {
      grid-column-start: 1;
      grid-column-end: 2;
    }

    #street {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    #complement {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }  
`;

export const PaymentOptions = styled.footer`
  padding: 40px;
  background-color: ${({theme}) => theme.card};
  margin-top: 12px;
  border-radius: 12px;

  header {
      display: flex;
      align-items: center;
      margin-bottom: 32px;

      & svg {
        color: ${({theme}) => theme.brandPurpleDark};
        font-size: 24px;
      }
      
      & div {
        margin-left: 16px;
        color: ${({theme}) => theme.subtitle};
        font-family: 'Roboto';
        line-height: 1.5rem;
      }
    }

  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }
    
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
      padding: 8px;
      font-family: 'Roboto';
      font-size: 1rem;
      color: ${({theme}) => theme.text};
      border-radius: 6px;
      border: 1px solid transparent;
      cursor: pointer;
      background-color: ${({theme}) => theme.button};      

      &:hover {
        background-color: ${({theme}) => theme.brandPurple};
      }

      &.active {
        border: 1px solid ${({theme}) => theme.brandPurpleDark};
      }

      & svg {
        color: ${({theme}) => theme.brandPurpleDark};
        margin-right: 4px;
      }
    }
  }
`;