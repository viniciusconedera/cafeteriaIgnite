import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CheckoutContextProvider } from './contexts/CheckoutContext';
import { GlobalStyle } from './global';
import { Router } from './Router';
import { defaultTheme } from './themes/default';

function App() {
  return (    
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
        </CheckoutContextProvider>        
      </BrowserRouter>      
    </ThemeProvider>
  )
}

export default App
