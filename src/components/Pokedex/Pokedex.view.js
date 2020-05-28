import styled, {css} from 'styled-components'

export const PokedexWraper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 30px);
  width: 980px;
  margin: auto;
  margin-top: 40px;
`;
export const PokedexHeading = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 40px;
`;
export const PokedexContent = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 06fr 04fr;
  grid-gap: 40px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
export const PokedexList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PokedexItemDetail = styled.div``;

export const LoadBtn = styled.button`
  width: 100%;
  grid-column: 1/4;
  padding: 10px 15px;
  background-color: #1e6fb4;
  border-radius: 5px;
  border: none;
  
  &:focus{
    outline: none;
  }

  @media (max-width: 760px) {
    grid-column: 1/3;
  }
`;

export const Item = styled.div``;

export const TypeWrapper = styled.div`
  display: flex;
`;

export const ClearType = styled.div`
  height: 15px;
  width: 15px;
  position: relative;
  margin-left: 5px;
  cursor: pointer;

  &::after,
  &::before{
    content: "";
    height: 100%;
    width: 2px;
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    left: 7px;
  }

  &::after{
    transform:rotate(45deg)
  }

  &::before{
    transform:rotate(-45deg)
  }
`;

export const TypeSelect = styled.div`
  font-size: 16px;
  margin-right: 3px;
  padding: 3px 5px;
  font-size: 16px;
  color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;

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