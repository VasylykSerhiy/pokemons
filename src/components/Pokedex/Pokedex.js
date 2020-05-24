import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectPokemons, selectPokemon
} from '../../redux/selectors/pokemon.selector';

import {
  getPokemons, getPokemon
} from '../../redux/actions/pokemon.actions'

import Pokemon from '../Pokemon'
import PokemonDetail from '../PokemonDetail'

import {
  PokedexWraper, PokedexHeading, PokedexContent,
  PokedexList, PokedexItemDetail, LoadBtn, Item
} from './Pokedex.view'

export default function Pokedex() {
  const dispatch = useDispatch();
  const [limitPocemon, setLimitPocemon] = useState(12);
  const [close, setClose] = useState(true);

  const pokemons = useSelector(selectPokemons);
  const pokemon = useSelector(selectPokemon);
  useEffect(() => {
    dispatch(getPokemons(limitPocemon))
  }, []);

  const onLoadPokemon = () => {
    dispatch(getPokemons(limitPocemon + 12))
    setLimitPocemon(limitPocemon + 12)
  }

  const onLoadAllPokemon = () => {
    dispatch(getPokemons(999))
    setLimitPocemon(999)
  }

  const pokemonSelect = (id) => {
    dispatch(getPokemon(id))
    setClose(false)
  }

  const onClose = () => {
    setClose(true)
  }

  return (
    <div>
      <PokedexWraper>
        <PokedexHeading>Pokedex</PokedexHeading>
        <PokedexContent>
          <PokedexList>
            {
              pokemons.map(pokemon => {
                return (
                  <Item
                    key={pokemon.data.id}
                    onClick={() => pokemonSelect(pokemon.data.id)}
                  >
                    <Pokemon
                      img={pokemon.data.sprites.front_default}
                      name={pokemon.data.name}
                      types={pokemon.data.types}

                    />
                  </Item>
                )
              })
            }

            <LoadBtn
              onClick={onLoadPokemon}
            >
              Load More
            </LoadBtn>
            <LoadBtn
              onClick={onLoadAllPokemon}
            >
              Load All
            </LoadBtn>
          </PokedexList>
          {
            !close ?
              <PokedexItemDetail >
                {
                  pokemon.length !== 0
                    ? <PokemonDetail pokemon={pokemon} onClose={onClose} />
                    : null
                }
              </PokedexItemDetail>
              : null
          }
        </PokedexContent>
      </PokedexWraper>
    </div>
  )
}
