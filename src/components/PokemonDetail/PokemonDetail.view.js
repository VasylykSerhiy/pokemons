import styled from 'styled-components'

export const PokemonDetailWrap = styled.div`
  background-color: #333;
  width: 280px;
  max-width: 100%;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 60%;
  transform: translateY(-50%);

  @media (max-width: 900px) {
  }

  @media (max-width: 760px) {
    width: 220px;
  }

  @media (max-width: 550px) {
    right: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 300px;
    box-shadow: 0 0 20px 0px black;

  }
`;
export const Avatar = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
  height: 160px;
`;
export const Name = styled.h2`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
`;
export const Params = styled.div`
  margin-top: 20px;
`;
export const Param = styled.div`
  border: 1px solid #888;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: .7fr .3fr;
  text-align: center;
  align-items: center;

  &:not(:last-of-type){
    border-bottom: 0;
  }
`;
export const Type = styled.div``;
export const NameParam = styled.div`
  padding: 5px;
`;
export const ValueParam = styled.div`
  padding: 5px;
  border-left: 1px solid #888;
`;

export const Close = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 15px;

  &:after,
  &:before{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #888;
    top: 50%;
    left: 0;
  }

  &:after{
    transform: rotate(45deg)
  }

  &:before{
    transform: rotate(-45deg)
  }

  @media (min-width: 551px) {
    display: none;
  }

`;