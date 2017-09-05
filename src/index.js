import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

import MainContainer from 'main/containers/MainContainer';

import reducers from './redux';

const initialState = Map();

const App = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const middleware = applyMiddleware(thunk);

  const store = createStore(reducers, initialState, middleware, composeEnhancers);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

