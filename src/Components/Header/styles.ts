import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.brandPurple};
    color: ${({theme}) => theme.brandPurpleDark};
    padding: 12px;
    border-radius: 8px;
    font-family: 'Roboto';
    font-size: 0.875rem;

    @media (max-width: 720px) {
    display: none;
  }

    & > svg {
      color: ${({theme}) => theme.brandPurpleDark};
      margin-right: 0.5rem;
    }
    &:first-child {
      margin-right: 1rem;
    }    
  }
  & > a {
    position:relative;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.brandYellow};
    padding: 12px;
    border-radius: 8px;    

    & > svg {         
      color: ${({theme}) => theme.brandYellowDark};
      border-radius: 8px;
    }
  }
`;

export const CartNumber = styled.div`
  position: absolute;
  top: -8px;
  right: -10px;
  width:1.5rem;
  height: 1.5rem;
  text-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({theme}) => theme.brandYellowDark};
  color: ${({theme}) => theme.background}
`;