import styled, {css} from 'styled-components'

export const PokemonWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  padding: 15px;
`;

export const Avatar = styled.img`
  object-fit: contain;
`;

export const Content = styled.div``;

export const Name = styled.h5`
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Types = styled.div`
  display: flex;
`;

export const Type = styled.h6`
  margin-right: 3px;
  padding: 3px 5px;
  font-size: 13px;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;

  ${props => (props.type === "poison" || props.type === "ice") && css`
    background: linear-gradient(to top, purple, #8e749b );
  `}  
  ${props => (props.type === "grass" || props.type === "electric") && css`
    background: linear-gradient(to top, green, #a0d384 );
  `} 
  ${props => (props.type === "fire" || props.type === "ground" || props.type === "ghost") && css`
    background: linear-gradient(to top, #fd5858, #fe9595 );
  `} 
  ${props => (props.type === "flying" || props.type === "psychic") && css`
    background: linear-gradient(to top, #5375fd, #90a6fe );
  `} 
  ${props => (props.type === "water" || props.type === "steel") && css`
    background: linear-gradient(to top, #a8baff, #bdcafe );
  `} 
  ${props => (props.type === "bug" || props.type === "bug") && css`
    background: linear-gradient(to top, #ffae70, #ffc89e );
  `} 
  ${props => (props.type === "fairy" || props.type === "fighting") && css`
    background: linear-gradient(to top, #8ebd00, #cfff3d );
  `} 
  ${props => (props.type === "normal" || props.type === "rock") && css`
    background: linear-gradient(to top, #00f060, #57ff9a );
  `} 
`;
