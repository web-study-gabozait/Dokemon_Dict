import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  width: 288px;
  height: 200px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 20px 15px;
  display: flex;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PokemonCardImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  margin: auto 0px;
`;

export const PokemonTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PokemonName = styled.span`
  color: ${({ theme }) => theme.contrast};
  font-size: 20px;
  font-weight: bold;
`;
