import React, {useState} from 'react'
import {
  PokemonDetailWrap, Avatar, Name, Type,
  Params, Param, NameParam, ValueParam, Close
} from './PokemonDetail.view'

export default function PokemonDetail({ pokemon, onClose }) {
  return (
    <PokemonDetailWrap >
      <Close onClick={() => onClose()}></Close>
      <Avatar src={pokemon.sprites.front_default} alt={pokemon.name}></Avatar>
      <Name>
        {
          pokemon.name
        }
      </Name>
      <Params>
        <Param>
          <NameParam>Type</NameParam>
          <ValueParam>
            {
              pokemon.types.map(item => <Type>{item.type.name}</Type>)
            }
          </ValueParam>
        </Param>
        {
          pokemon.stats.map(item => {
            item.stat.name = item.stat.name === "speed" ? "Speed" : item.stat.name;
            item.stat.name = item.stat.name === "special-defense" ? "SP Defense" : item.stat.name;
            item.stat.name = item.stat.name === "special-attack" ? "SP Attack" : item.stat.name;
            item.stat.name = item.stat.name === "defense" ? "Defense" : item.stat.name;
            item.stat.name = item.stat.name === "attack" ? "Attack" : item.stat.name;
            item.stat.name = item.stat.name === "hp" ? "HP" : item.stat.name;
            return (
              <Param key={item.id}>
                <NameParam>
                  {
                    item.stat.name
                  }
                </NameParam>
                <ValueParam>
                  {
                    item.base_stat
                  }
                </ValueParam>
              </Param>
            )
          })
        }
        <Param>
          <NameParam>Weight</NameParam>
          <ValueParam>
            {
              pokemon.weight
            }
          </ValueParam>
        </Param>
        <Param>
          <NameParam>Total moves</NameParam>
          <ValueParam>
            {
              pokemon.moves.length + 1
            }
          </ValueParam>
        </Param>

      </Params>

    </PokemonDetailWrap>
  )
}
