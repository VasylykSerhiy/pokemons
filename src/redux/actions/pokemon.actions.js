import Api from '../../api';
import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_FAIL,
  GET_POKEMONS_SUCCESS,

  GET_POKEMON_REQUEST,
  GET_POKEMON_FAIL,
  GET_POKEMON_SUCCESS,
} from '../actionTypes';

export const getPokemons = limit => async (dispatch) => {
  dispatch({
    type: GET_POKEMONS_REQUEST,
  });

  try {
    const pokemons = await Api.getPokemons(limit).then(res => res.data);

    const pokemonsId = pokemons.results.map(item => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1]
    })
    
    let  requests = pokemonsId.map(id => Api.getPokemon(Number(id)))

    Promise.all(requests).then(res => {
      dispatch({
        type: GET_POKEMONS_SUCCESS,
        payload: res,
      });
    })
   
  } catch (err) {

    dispatch({
      type: GET_POKEMONS_FAIL,
      payload: err,
      error: true,
    });
  }
};

export const getPokemon = id => async (dispatch) => {
  dispatch({
    type: GET_POKEMON_REQUEST,
  });

  try {
    const pokemon = await Api.getPokemon(id).then(res => res.data);
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: pokemon,
    });
  } catch (err) {

    dispatch({
      type: GET_POKEMON_FAIL,
      payload: err,
      error: true,
    });
  }
};



 