import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import sagaMiddleware from './sagaMiddleware';

const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
  return store;
};

export default configureStore;
