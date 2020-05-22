import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: 'http://pokeapi.co/api/v2',
});

const api = {
  getPokemons: limit => BASE_CONNECTION.get(`/pokemon/?limit=${limit}`),
  getPokemon: id => BASE_CONNECTION.get(`/pokemon/${id}`),
};

export default api;
