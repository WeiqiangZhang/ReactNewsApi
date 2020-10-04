import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './style/theme';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import newsReducer from './store/reducer/newsReducer';

const rootReducer = combineReducers({
  newsReducer: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
