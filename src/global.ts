import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.background};
    font-family: 'Baloo 2', serif;
  }

  button, input {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    border-color: transparent;
  }

  button:hover {
    opacity: 0.7;
  }

  ul {
    list-style-type: none;
  }
`;