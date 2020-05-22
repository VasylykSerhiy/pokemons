import {
  GET_POKEMONS_SUCCESS,
  GET_POKEMON_SUCCESS
} from '../actionTypes';

const initialState = {
  pokemons: [],
  pokemon: [],
  loading: true
};

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: payload,
        loading: false,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: payload,
      };
    default:
      return state;
  }
};
