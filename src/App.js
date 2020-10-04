import React from 'react';
import Header from 'components/header';
import { createGlobalStyle } from 'styled-components';

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
    </React.Fragment>
  );
}

export default App;
