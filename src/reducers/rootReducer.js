import { combineReducers } from 'redux';
import clientsReducer from '../modules/Clients/reducers/Clietns.reducer';

const rootReducer = combineReducers({
  clientsReducer,
});

export default rootReducer;
