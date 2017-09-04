import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import MainContainer from 'features/main/containers/MainContainer';

import reducers from './redux';

const initialState = Map();

const App = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const store = createStore(reducers, initialState, composeEnhancers(), applyMiddleware());
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

