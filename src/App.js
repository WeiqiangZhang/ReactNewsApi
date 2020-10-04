import React from 'react';
import Header from 'components/header';
import Page from 'components/page';
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
      <Page />
    </React.Fragment>
  );
}

export default App;
