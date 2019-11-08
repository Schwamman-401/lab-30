import React from 'react';
import Header from './components/header';
import Main from './components/main';

import { Provider } from 'react-redux';
import createStore from './store';
let store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

