import styled from 'styled-components';

export const CartContainer = styled.div`
  margin-right: 32px;
  
  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({theme}) => theme.subtitle};
  }
`;

export const Summary = styled.div`
  margin-top: 32px;
  background-color: ${({theme}) => theme.card};
  padding: 40px;

  & > ul {
    margin-bottom: 12px;   
  } 

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    & button {
      padding: 12px 8px;
      height: 46px;
      width: 100%;
      margin-top: 24px;
      border-radius: 8px;
      background-color: ${({theme}) => theme.brandYellowMedium};
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.125rem;
      color: ${({theme}) => theme.card};
    }
  }
`;

export const ProductCheck = styled.li`
  display:  grid;
  grid-template-columns: 1fr 4fr;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({theme}) => theme.button};

  &:not(:first-child) {
    padding: 12px 0;
  }

  & img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  & div {
    display: flex;
    flex-direction: column;



    & section {
      display: flex;
      justify-content: space-between;

      & span:first-child {
          @media (max-width: 1200px) {    
          display: none;
        }
      }      
    }

    & > footer {
      display: flex;
      flex-direction: row;
      margin-top: 8px;

      & > div {
        display: flex;
        flex-direction: row;
        background-color: ${({theme}) => theme.button};
        border-radius: 6px;

        & > span {       
          padding: 8px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.125rem;

          &:first-child {
            color: ${({theme}) => theme.brandPurpleDark};
            font-weight: bolder;
          }

          &:last-child {
            color: ${({theme}) => theme.brandPurpleDark};
          }
        }
      }
      
      & > span {
        display: flex;
        align-items: center;
        background-color: ${({theme}) => theme.button};
        margin-left: 12px;
        border-radius: 6px;
        padding: 8px 12px;
        cursor: pointer;
        
        @media (max-width: 1200px) {    
          display: none;
        }
        
        & > svg {
          color: ${({theme}) => theme.brandPurpleDark};
          margin-right: 8px;
        }
      }
    }
  }
`;

export const ValuesCheck = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;

    &:first-child {
      margin-top: 12px;
    }

    &:last-child {
      font-size: 1.25rem;
    }
  }
`;