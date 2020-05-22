import styled from 'styled-components'

export const PokedexWraper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 30px);
  width: 980px;
  margin: auto;
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
    outline: none
  }

  @media (max-width: 760px) {
    grid-column: 1/3;
  }
`;

export const Item = styled.div``;