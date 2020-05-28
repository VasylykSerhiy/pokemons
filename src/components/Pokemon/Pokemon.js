
import React from 'react'

import { Avatar, Content, Name, Types, PokemonWrap, Type } from './Pokemon.view'
export default function Pokemon(props) {
  return (
    <PokemonWrap>
      <Avatar src={props.img} alt={props.name} />
      <Content>
        <Name>{props.name}</Name>
        <Types>
          {
            props.types.map(type => {
              return(
                <Type
                  key = {Date.now().toString() + Math.random()}
                  type = {type.type.name}
                  onClick = {() => props.chengeType(type.type.name)}
                >
                  {type.type.name}
                </Type>
              )
            })
          }
        </Types>
      </Content>
    </PokemonWrap>
  )
}
