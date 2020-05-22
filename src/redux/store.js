import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {pokemonReducer} from './reducers/pokemon.reducer';

const reducers = combineReducers({
  pokemonReducer,
  
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
