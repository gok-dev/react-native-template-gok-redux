import React from 'react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import Routes from 'routes';
import store from 'store';
import theme from 'theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
